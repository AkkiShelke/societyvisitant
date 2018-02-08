
//importing modules
const express = require('express');
const flatmember_router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Flatmember = require('../../models/society/flatmember');
var secret = 'Akshay';
var bcrypt = require('bcrypt-nodejs');





//////////////////////////////////  Flat TABLE OPERATIONS  //////////////////////////////////////////


//rerieving  Flatmember Details
flatmember_router.get('/flatmemberlist', (req, res, next)=>
{ 
    Flatmember.find().sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
});

//rerieving  Flatmember Details by tenant id

flatmember_router.get('/memberlistbytenant/:tenant_id', (req, res, next)=>
{  
    Flatmember.find({Tenant_id: req.params.tenant_id }).sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
});


//rerieving  Flatmember Details by tenant id
flatmember_router.get('/memberlistbyflatowner/:flatowner_id', (req, res, next)=>
{  
    Flatmember.find({Flatowner_id: req.params.flatowner_id, Tenant_id: null || undefined }).sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
});

// Get the Flatmember relational data
flatmember_router.get('/flatmemberlistdetails/:society_id', (req, res, next)=>
{

    Flatmember.find({Society_id: req.params.society_id}).sort({_id: -1}).exec(function(err, result)
{
   
    res.json(result);

});
});


//add Flatmember 
flatmember_router.post('/addflatmember',(req, res, next)=>
{
    Flatmember.findOne({ email: req.body.flatmember_email , Flatowner_id:  req.body.flatowner_id, Tenant_id: req.body.tenant_id}, function(err, result){
        if(!result){
             //logic for add Flat Details
    let newFlatmember = new Flatmember(
        {   Superadmin_id: req.body.superadmin_id,
            Society_id: req.body.society_id,
            Flatowner_id: req.body.flatowner_id,
            Tenant_id:req.body.tenant_id,
             flatmember_name: req.body.flatmember_name,
             email: req.body.flatmember_email,
             contact: req.body.flatmember_contact
          
        });
        if( req.body.flatmember_name == null || req.body.flatmember_name == '' || req.body.flatmember_email == null || req.body.flatmember_email == ''
        || req.body.flatmember_contact == null || req.body.flatmember_contact == '' )
        {
            res.json({success: false, message: 'Ensure Flatmember name , email, contact were provided'});
        }
        else
        {
            newFlatmember.save(function(err, result)
            {
                if(err)
                {
                    res.json({success: false, message: 'Not going to register Flatmember email is exist ' + req.body.flatmember_email});
                }
                else
                { 
                    res.json({success: true, message: 'Flatmember is added successfully!',result});
                }
            });
        }
        }
        else{
            res.json({success: false, message: 'Flatmember is exist!', result});
        }
    });
   
});

//Update details
flatmember_router.put('/updateflatmember/:flatmember_id',(req, res, next)=>
{      
    Flatmember.findByIdAndUpdate(req.params.flatmember_id,
    {  
        $set: 
        { 
            flatmember_name: req.body.flatmember_name,
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
            res.send("Error updating Details in Flat Member list");
        }
        else
        {
            res.json({success: true,message:"Flat Member Details Are updated"});
        }
    });
});

//Update Status
flatmember_router.put('/updateflatmemberstatus/:flatmember_id',(req, res, next)=>
{      
    Flatmember.findByIdAndUpdate(req.params.flatmember_id,
                {  
                    $set: 
                    { 
                        flatmember_status: req.body.status
                    }
                },
                {
                    new: true
                },
                function(err, result)
                {
                    if(err)
                    {
                        res.json({success: false, message:"Error updating status in Flat Member list"});
                    }
                    else
                    {
                        if(req.body.status == false){
                            res.json({success: true, message:"Flat Member Status is Inactive"});

                        }
                        else{
                            res.json({success: true, message:"Flat Member Status is Active"});

                        }
                    }
                });
  
 
});

//delete Flatmember Details
flatmember_router.delete('/deleteflatmember/:flatmember_id',(req, res, next)=>
{
    //logic to delete Flatmember Details
    Flatmember.remove({_id: req.params.flatmember_id}, function(err, result)
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

module.exports = flatmember_router;