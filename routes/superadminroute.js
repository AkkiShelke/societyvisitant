
//importing modules
const express = require('express');
const superadmin_router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Superadmin = require('../models/superadmin');
var secret = 'Akshay';
var bcrypt = require('bcrypt-nodejs');



var Country = require('../models/address/country');
var State = require('../models/address/state');
var City = require('../models/address/city');
var Location = require('../models/address/location');
var Pincode = require('../models/address/pincode');





//////////////////////////////////  SUPERADMIN TABLE OPERATIONS  //////////////////////////////////////////


//rerieving  Superadmin Details
superadmin_router.get('/recruiters', (req, res, next)=>
{
    Superadmin.find(function(err, result)
    {
        res.json(result);
    });
});


//add addSuperadmin Registration
superadmin_router.post('/addrecruiters',(req, res, next)=>
{
    //logic for add Superadmin Details
    let newSuperadmin = new Superadmin(
    {
        superadmin_name: req.body.superadmin_name,
        password: req.body.password
      
    });
    if(req.body.superadmin_name == null || req.body.superadmin_name == '' || req.body.password == null || req.body.password == '')
    {
        res.json({success: false, message: 'Ensure superadmin name, password were provided'});
    }
    else
    {
        newSuperadmin.save(function(err, result)
        {
            if(err)
            {
                res.json({success: false, message: 'superadmin name'});
            }
            else
            { 
                res.json({success: true, message: 'Account registered! '});
            }
        });
    }
});

   
// Superadmin Login Route
// http://localhost:port/api/authenticate
superadmin_router.post('/authenticate', (req, res, next) =>
{
    Recruiter.findOne({ email: req.body.email }).select('_id    email password').exec(function(err, result)
    {  
       
      
        if(err)
        { 
            throw err;
        }
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
                      
                      
                        res.json({ success: true,
                        token: 'JWT '+token,
                        recruiter:{
                            id: result._id,
                            email: result.email,
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
        

    });

    
});


// chech Superadmin current password
superadmin_router.post('/superadmincheckcurrentpassword/:recruiter_id', (req, res, next) =>
{
    Superadmin.findById(req.params.recruiter_id).select('password').exec(function(err, result)
    {  
       
      
        if(err)
        { 
            throw err;
        }
        if(!result)
        {
            res.json({ success: false, message: 'Please enter valid current password' });
        } 
        else if(result)
        {
            if(req.body.password)
            {
                var validPassword = result.comparePassword(req.body.password);
               if(validPassword){
                res.json({ success: true, message: 'Current password is correct'});

               }
               else{
                res.json({ success: false, message: 'Please enter valid current Password' });

               }

            }
            else
            {   
                res.json({ success: false, message: 'No current password provided' });
          
             }
        }
        

    });

    
});


// change Superadmin current password
superadmin_router.put('/superadminchangecurrentpassword/:superadmin_id',(req, res, next)=>
{ 
    
    Superadmin.findById(req.params.superadmin_id).select('password').exec(function(err, result)
    {  
       
        console.log(req.body.id);
        console.log(result);
        if(err)
        { 
            throw err;
        }
        if(!result)
        {
            res.json({ success: false, message: 'Please enter valid current password' });
        } 
        else if(result)
        {                    

            if(req.body.password)
            {
                var validPassword = result.comparePassword(req.body.password);
               if(validPassword){
                    if(err) throw err;
                    if(req.body.newpassword == null || req.body.newpassword == '')
                    {
                        res.json({ success: false, message: 'Password not provided'});
            
                    } else
                        {
                        result.password = req.body.newpassword;
                
                        result.save(function(err){
                            if(err){
                                res.json({ success: false, message: err });
                            }else{
                                res.json({ success: true, message: 'Password has been reset!' });
                
                            }
                        });
                    }

               }
               else{
                res.json({ success: false, message: 'Please enter valid current Password' });

               }
            }
            else
            {   
                res.json({ success: false, message: 'No current password provided' });
             }
        }
        

    });

});

//  Superadmin reset password
superadmin_router.put('/superadminsavepassword',function(req, res)
{ 
    Superadmin.findOne({ email : req.body.email }).select().exec(function(err, recruiter){
        if(err) throw err;
        if(req.body.password == null || req.body.password == '')
        {
            res.json({ success: false, message: 'Password not provided'});

        } else
            {
            recruiter.password = req.body.password;
            recruiter.resettoken = false;
    
            recruiter.save(function(err){
                if(err){
                    res.json({ success: false, message: err });
                }else{
                    res.json({ success: true, message: 'Password has been reset!' });
    
                }
            });
        }

    });
});


//delete recruiter Details
superadmin_router.delete('/deleterecruiter/:recruiter_id',(req, res, next)=>
{
    //logic to delete recruiter Details
    Superadmin.remove({_id: req.params.recruiter_id}, function(err, result)
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

///////////////////////////////////////////// END OF RECRUITER TABLE OPERATION ///////////////////////////////////////////////////////


// exporting the method to get access outside of Router

module.exports = superadmin_router;