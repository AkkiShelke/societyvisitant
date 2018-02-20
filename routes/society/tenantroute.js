//importing modules
const express = require('express');
const tenant_router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Tenant = require('../../models/society/tenant');
var secret = 'Akshay';
var bcrypt = require('bcrypt-nodejs');





//////////////////////////////////  Flat TABLE OPERATIONS  //////////////////////////////////////////


//rerieving  Tenant Details
tenant_router.get('/tenantlist', (req, res, next)=>
{ 
    Tenant.find().sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
});

// Get the Tenant relational data
tenant_router.get('/tenantlistdetails/:society_id', (req, res, next)=>
{

    Tenant.find({Society_id: req.params.society_id}).sort({_id: -1}).exec(function(err, result)
{
   
    res.json(result);

});
});

// Get the Tenant relational data by Flatowner
tenant_router.get('/tanentlistbyflatowner/:flatowner_id', (req, res, next)=>
{

    Tenant.find({Flatowner_id: req.params.flatowner_id}).sort({_id: -1}).exec(function(err, result)
    {
   
    res.json(result);

    });
});

// Get the Inctive Tenant relational data by Flatowner
tenant_router.get('/activetanentbyflatowner/:flatowner_id', (req, res, next)=>
{

    Tenant.findOne({Flatowner_id: req.params.flatowner_id, tenant_status: true },function(err, result)
    {
  
    res.json(result);

    });
});

// Get the Inctive Tenant relational data by Flatowner
tenant_router.get('/inactivetanentbyflatowner/:flatowner_id', (req, res, next)=>
{
    Tenant.find({Flatowner_id: req.params.flatowner_id, tenant_status: true }).sort({_id: -1}).exec(function(err, result)
    {
        if(result.length >0){
            res.json({success: false, result});

        }
        else{
            res.json({success: true , result});

        }

    });
});

//add Flat 
tenant_router.post('/addtenant',(req, res, next)=>
{
    Tenant.findOne({ email: req.body.tenant_email , Flatowner_id:  req.body.flatowner_id}, function(err, result){

        if(!result){
             //logic for add Flat Details
    let newTenant = new Tenant(
        {   Superadmin_id: req.body.superadmin_id,
            Society_id: req.body.society_id,
            Flat_id: req.body.flat_id,
            Flatowner_id: req.body.flatowner_id,
             tenant_name: req.body.tenant_name,
             email: req.body.tenant_email,
             contact: req.body.tenant_contact,            
             password: req.body.tenant_password,
             tenant_status: true

          
        });
        if( req.body.tenant_name == null || req.body.tenant_name == '' || req.body.tenant_email == null || req.body.tenant_email == ''
        || req.body.tenant_contact == null || req.body.tenant_contact == ''|| req.body.tenant_password == null || req.body.tenant_password == '' )
        {
            res.json({success: false, message: 'Ensure Tenant name , email, contact, Password were provided'});
        }
        else
        {
            newTenant.save(function(err, result)
            {
                if(err)
                {
                    res.json({success: false, message: ' Tenant Email is exist '});
                }
                else
                { 
                    res.json({success: true, message: 'Tenant is added successfully!', result});
                }
            });
        }
        }
        else{
            res.json({success: false, message: 'Tenant is exist!', result});
        }
    });
   
});


 
// Tenant Login Route

tenant_router.post('/authenticatetenant', (req, res, next) =>
{
    Tenant.findOne({ email: req.body.email }).select('_id  tenant_name tenant_status  email password').exec(function(err, result)
    {  
       

        if(err)
        { 
            throw err;
        }

       if(result){

        if(result.tenant_status == true)
        {       

        if(!result)
        {
            res.json({ success: false, message: 'Please enter valid Email ID' });
        } 
        else if(result)
        {
            if(req.body.password)
            {
                var validPassword = result.comparePassword(req.body.password);
                if(!validPassword)
                {
                    res.json({ success: false, message: 'Please enter valid Password' });
                }
                else
                {   
                    // res.json({ success: true, message: 'authenticate'});
                    //Create the token for Superadmin-details
                    const token = jwt.sign(result.toJSON(), secret, {
                        expiresIn: 604800 // 1 week
                      });
                      
 
                            res.json({ success: true, message: 'Tenant Login successfully  ',

                        token: 'JWT '+token,
                        tenant:{
                            id: result._id,
                            email: result.email,
                            tenant_name: result.tenant_name,
                            message: 'Authenticated'
                           
                        },
                                                                       
                    });        
                
                 }
            }
            else 
            {
                res.json({ success: false, message: 'No password provided' });
            }
        
        }
    }
    else{
        res.json({ success: false, message: 'Please Activate Tenant Account' });

    }
} 

    });

    
});

//Update details
tenant_router.put('/updatetenant/:tenant_id',(req, res, next)=>
{      
    Tenant.findByIdAndUpdate(req.params.tenant_id,
    {  
        $set: 
        { 
            tenant_name: req.body.tenant_name,
            contact: req.body.contact
        }
    },
    {
        new: true
    },
    function(err, result)
    {
        if(err)
        {
            res.send("Error updating Details in Tenant list");
        }
        else
        {
            res.json({success: true,message:"Tenant Details Are updated"});
        }
    });
});

//Update Status
tenant_router.put('/updatetenantstatus/:flatowner_id',(req, res, next)=>
{      
    Tenant.find({Flatowner_id: req.params.flatowner_id, tenant_status: true },function(err, result)
    {
        if( result.length == 0) {
            Tenant.findByIdAndUpdate(req.body.tenant_id,
                {  
                    $set: 
                    { 
                        tenant_status: req.body.status
                    }
                },
                {
                    new: true
                },
                function(err, result)
                {
                    if(err)
                    {
                        res.json({success: false, message:"Error updating status in Tenant list"});
                    }
                    else
                    {
                        res.json({success: true, message:"Tenant Status is Active"});
                    }
                });
        }
        
        else{
            if(req.body.status == false){
                Tenant.findByIdAndUpdate(req.body.tenant_id,
                    {  
                        $set: 
                        { 
                            tenant_status: req.body.status
                        }
                    },
                    {
                        new: true
                    },
                    function(err, result)
                    {
                        if(err)
                        {
                            res.json({success: false, message:"Error updating status in Tenant list"});
                        }
                        else
                        {
                            res.json({success: true, message:"Tenant Status is Inactive"});
                        }
                    });

            }else{
                res.json({success: false ,message: 'Inactive other Tenant to Active this Tenant', result});

            }

        }

    });
 
});

//delete Flatowner Details
tenant_router.delete('/deletetenant/:tenant_id',(req, res, next)=>
{
    //logic to delete Flatowner Details
    Tenant.remove({_id: req.params.tenant_id}, function(err, result)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        } 
    });
});

///////////////////////////////////////////// END OF Flat TABLE OPERATION ///////////////////////////////////////////////////////


// exporting the method to get access outside of Router

module.exports = tenant_router;