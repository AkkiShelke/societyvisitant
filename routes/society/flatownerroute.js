//importing modules
const express = require('express');
const flatowner_router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Flatowner = require('../../models/society/flatowner');
var secret = 'Akshay';
var bcrypt = require('bcrypt-nodejs');





//////////////////////////////////  Flat TABLE OPERATIONS  //////////////////////////////////////////


//rerieving  Flat Details
flatowner_router.get('/flatownerlist', (req, res, next)=>
{ 
    Flatowner.find(function(err, result)
    {
        res.json(result);
    });
});

//rerieving  Flat Detailsby ID
flatowner_router.get('/flatowner/:flatowner_id', (req, res, next)=>
{ 
    Flatowner.findOne({_id: req.params.flatowner_id},function(err, result)
    {
        Flatowner.populate( result, {path:'Flat_id'},function(err, result){

        res.json(result);
        });
    });
});

// Get the Flat relational data
flatowner_router.get('/flatownerlistdetails/:society_id', (req, res, next)=>
{

    Flatowner.find({Society_id: req.params.society_id},function(err, result)
{
    Flatowner.populate( result, {path:'Flat_id', populate:[
        { path: 'Chairman_id' , populate:[{ path: 'Manager_id' ,  populate:[{path:'Block_id'}]}] }
    
    ]},function(err, result){
    res.json(result);

        });
});
});

//Check Flat 
flatowner_router.post('/checkflatowner',(req, res, next)=>
{
    Flatowner.findOne({ email: req.body.flatowner_email , Flat_id:  req.body.flat_id}, function(err, result){
        if(!result){

        }
        else{
            res.json({success: false, message: 'Flatowner email is exist!'});

        }
});
});

//add Flat 
flatowner_router.post('/addflatowner',(req, res, next)=>
{
    Flatowner.findOne({ email: req.body.flatowner_email , Flat_id:  req.body.flat_id}, function(err, result){

        if(!result){
             //logic for add Flat Details
    let newFlatowner = new Flatowner(
        {   Superadmin_id: req.body.superadmin_id,
            Society_id: req.body.society_id,
            Flat_id: req.body.flat_id,
             flatowner_name: req.body.flatowner_name,
             email: req.body.flatowner_email,
             contact: req.body.flatowner_contact,            
             password: req.body.flatowner_password
          
        });
        if( req.body.flatowner_name == null || req.body.flatowner_name == '' || req.body.flatowner_email == null || req.body.flatowner_email == ''
        || req.body.flatowner_contact == null || req.body.flatowner_contact == ''|| req.body.flatowner_contact == null || req.body.flatowner_contact == '' )
        {
            res.json({success: false, message: 'Ensure Flat Owner name , email, contact, Password were provided'});
        }
        else
        {
            newFlatowner.save(function(err, result)
            {
                if(err)
                {
                    res.json({success: false, message: 'Flatowner email is exist' + req.body.flatowner_email});
                }
                else
                { 
                    res.json({success: true, message: 'Flatowner is added successfully!', result});
                }
            });
        }
        }
        else{
            res.json({success: false, message: 'Flatowner is exist!'});
        }
    });
   
});

//Update details
flatowner_router.put('/updateflatowner/:flatowner_id',(req, res, next)=>
{      
    Flatowner.findByIdAndUpdate(req.params.flatowner_id,
    {  
        $set: 
        { 
            flatowner_name: req.body.flatowner_name,
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
            res.send("Error updating Details in FlatOwner list");
        }
        else
        {
            res.json({success: true,message:"Flat Owner Details Are updated"});
        }
    });
});

//Update Status
flatowner_router.put('/updateflatownerstatus/:flatowner_id',(req, res, next)=>
{      
    Flatowner.findByIdAndUpdate(req.params.flatowner_id,
    {  
        $set: 
        { 
            flatowner_status: req.body.status
        }
    },
    {
        new: true
    },
    function(err, result)
    {
        if(err)
        {
            res.send("Error updating status in FlatOwner list");
        }
        else
        {
            res.json(result);
        }
    });
});


//delete Flatowner Details
flatowner_router.delete('/deleteflatowner/:flatowner_id',(req, res, next)=>
{
    //logic to delete Flatowner Details
    Flatowner.remove({_id: req.params.flatowner_id}, function(err, result)
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

module.exports = flatowner_router;