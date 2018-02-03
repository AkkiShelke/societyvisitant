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
    Tenant.find(function(err, result)
    {
        res.json(result);
    });
});

// Get the Tenant relational data
tenant_router.get('/tenantlistdetails/:society_id', (req, res, next)=>
{

    Tenant.find({Society_id: req.params.society_id},function(err, result)
{
   
    res.json(result);

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
             password: req.body.tenant_password
          
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
                    res.json({success: false, message: ' Tenant Email is exist ' + req.body.tenant_email});
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