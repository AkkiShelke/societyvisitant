//importing modules
const express = require('express');
const flatowner_router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Flatowner = require('../../models/society/flatowner');
var Tenant = require('../../models/society/tenant');
var Flatmember = require('../../models/society/flatmember');

var secret = 'Akshay';
var bcrypt = require('bcrypt-nodejs');





//////////////////////////////////  Flat TABLE OPERATIONS  //////////////////////////////////////////


//rerieving  Flat Details
flatowner_router.get('/flatownerlist', (req, res, next)=>
{ 
    Flatowner.find().sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
});

//rerieving  Flat Detailsby ID
flatowner_router.get('/flatowner/:flat_id', (req, res, next)=>
{ 
    Flatowner.findOne({Flat_id: req.params.flat_id}).sort({_id: -1}).exec(function(err, result)
    {
        Flatowner.populate( result, {path:'Flat_id'},function(err, result){
            
            res.json(result);
        });
    });
});

// Get the Flat relational data
flatowner_router.get('/flatownerlistdetails/:society_id', (req, res, next)=>
{
    
    Flatowner.find({Society_id: req.params.society_id}).sort({_id: -1}).exec(function(err, result)
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
    Flatowner.findOne({Flat_id: req.body.flat_id, flatowner_status: true}).update({"$set": {"flatowner_status": false}}).exec(function(err, result){
        
        if(result._id){
            console.log("1st:-");
            console.log(result);
            Tenant.find({Flatowner_id: result._id}).update({"$set": {"tenant_status": false}}).exec(function(err, result){
                if(result._id){
                    console.log("2nd:-");
                    console.log(result);
                    Flatmember.find({Flatowner_id: result._id}).update({"$set": {"flatmember_status": false}}).exec(function(err, result){
                    });
                    Flatmember.find({Tenant_id: result._id}).update({"$set": {"flatmember_status": false}}).exec(function(err, result){
                    });
                }
            });
        }
        //logic for add Flat Details
        
        // create Date object for current location
        var d = new Date();
        
        // convert to msec
        // add local time zone offset
        // get UTC time in msec
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        
        offset = +5.5;
        // create new Date object for different city
        // using supplied offset
        var localDate = new Date(utc + (3600000*offset));
        var h =  localDate.getHours(), m = localDate.getMinutes();
        var in_time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');   
        
        
        var todate= localDate.getDate();
        var tomonth= localDate.getMonth()+1;
        var toyear= localDate.getFullYear();
        var today_date= todate+'/'+tomonth+'/'+toyear;
        
        let newFlatowner = new Flatowner(
            {   Superadmin_id: req.body.superadmin_id,
                Society_id: req.body.society_id,
                Flat_id: req.body.flat_id,
                Created_on: today_date,
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
        });
        
    });
    
    
    // Flatowner Login Route
    
    flatowner_router.post('/authenticateflatowner', (req, res, next) =>
    {
        Flatowner.findOne({ email: req.body.email }).select('_id  flatowner_name flatowner_status  email password').exec(function(err, result)
        {  
            
            
            if(err)
            { 
                throw err;
            }
            
            if(result){
                
                if(result.flatowner_status == true)
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
                                
                                
                                res.json({ success: true, message: 'Flatowner Login successfully  ',
                                
                                token: 'JWT '+token,
                                flatowner:{
                                    id: result._id,
                                    email: result.email,
                                    flatowner_name: result.flatowner_name,
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
                res.json({ success: false, message: 'Please Activate Account' });
                
            }
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
                    if(req.body.status == false){
                        res.json({success: false, message: result.flatowner_name + " FlatOwner Status is Inactive"});
                        
                    }
                    else{
                        res.json({success: true, message: result.flatowner_name + " FlatOwner Status is Active"});
                        
                    }
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