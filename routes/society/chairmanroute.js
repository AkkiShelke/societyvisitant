
//importing modules
const express = require('express');
const chairman_router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Chairman = require('../../models/society/chairman');
var secret = 'Akshay';
var bcrypt = require('bcrypt-nodejs');





//////////////////////////////////  SOCIETY TABLE OPERATIONS  //////////////////////////////////////////


//rerieving  Chairman Details
chairman_router.get('/chairmanlist', (req, res, next)=>
{ 
    Chairman.find().sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
});


chairman_router.get('/chairman/:chairman_id', (req, res, next)=>
{ 
    Chairman.findById({_id: req.params.chairman_id}).sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
});


// Get the Chairman relational data
chairman_router.get('/chairmanlistdetails/:society_id', (req, res, next)=>
{
    
    Chairman.find({Society_id: req.params.society_id}).select('_id Manager_id chairman_name chairman_status  email contact').sort({_id: -1}).exec(function(err, result)
    {
        Chairman.populate( result, {path:'Manager_id'},function(err, result){
            res.json(result);
            
        });
    });
});

// Get the Chairman relational data
chairman_router.get('/chairmanlistbymanager/:manager_id', (req, res, next)=>
{
    
    Chairman.find({Manager_id: req.params.manager_id}).select('_id Manager_id chairman_name chairman_status email contact').sort({_id: -1}).exec(function(err, result)
    {
        
        res.json(result);
        
        
    });
});

//add Chairman Registration
chairman_router.post('/addchairman',(req, res, next)=>
{
    Chairman.findOne({ email: req.body.email , Society_id:  req.body.society_id}, function(err, result){
        
        if(!result){
            //logic for add Chairman Details
            
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
            
            let newChairman= new Chairman(
                {   
                    Superadmin_id:  req.body.superadmin_id,
                    Society_id: req.body.society_id,
                    Manager_id: req.body.manager_id,
                    Created_on: today_date,
                    chairman_name: req.body.chairman_name,
                    email: req.body.email,
                    contact: req.body.contact,
                    password: req.body.password
                    
                });
                if(req.body.chairman_name == null || req.body.chairman_name == ''  || req.body.email == null || req.body.email == '' || req.body.contact == null || req.body.contact == '' || req.body.password == null || req.body.password == '')
                {
                    res.json({success: false, message: 'Ensure Manager, Chairman name, email, contact, password were provided'});
                }
                else
                {
                    newChairman.save(function(err, result)
                    {
                        if(err)
                        {
                            res.json({success: false, message: 'Chairman admin is exist' + err});
                        }
                        else
                        { 
                            res.json({success: true, message: 'Chairman is registered! '});
                        }
                    });
                }
            }
            else{
                res.json({success: false, message: 'Chairman is exist'});
            }
        });
        
    });
    
    
    // check Chairman current password
    chairman_router.post('/checkchairmancurrentpassword/:chairman_id', (req, res, next) =>
    {
        Chairman.findById(req.params.chairman_id).select('password').exec(function(err, result)
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
    
    
    // change Chairman current password
    chairman_router.put('/changechairmancurrentpassword/:chairman_id',(req, res, next)=>
    { 
        
        Chairman.findById(req.params.chairman_id).select('password').exec(function(err, result)
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
    
    //  Chairman reset password
    // chairman_router.put('/superadminsavepassword',function(req, res)
    // { 
    //     Chairman.findOne({ email : req.body.email }).select().exec(function(err, recruiter){
    //         if(err) throw err;
    //         if(req.body.password == null || req.body.password == '')
    //         {
    //             res.json({ success: false, message: 'Password not provided'});
    
    //         } else
    //             {
    //             recruiter.password = req.body.password;
    //             recruiter.resettoken = false;
    
    //             recruiter.save(function(err){
    //                 if(err){
    //                     res.json({ success: false, message: err });
    //                 }else{
    //                     res.json({ success: true, message: 'Password has been reset!' });
    
    //                 }
    //             });
    //         }
    
    //     });
    // });
    
    //Update name and contact
    chairman_router.put('/updatechairman/:chairman_id',(req, res, next)=>
    {      
        Chairman.findByIdAndUpdate(req.params.chairman_id,
            {  
                $set: 
                { 
                    chairman_name: req.body.chairman_name,
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
                    res.send("Error updating Chairman Details");
                }
                else
                {
                    res.json({success: true ,message: 'Chairman Details are updated!'}) ;
                }
            });
        });
        
        
        //Update Status
        chairman_router.put('/updatechairmanstatus/:chairman_id',(req, res, next)=>
        {      
            Chairman.findByIdAndUpdate(req.params.chairman_id,
                {  
                    $set: 
                    { 
                        chairman_status: req.body.status
                    }
                },
                {
                    new: true
                },
                function(err, result)
                {
                    if(err)
                    {
                        res.json({success: false, message:"Error updating status in  Chairman list"});
                    }
                    else
                    {
                        if(req.body.status == false){
                            res.json({success: false, message: result.chairman_name + " Chairman Status is Inactive"});
                            
                        }
                        else{
                            res.json({success: true, message: result.chairman_name + " Chairman Status is Active"});
                            
                        }
                    }
                });
            });
            
            //delete Chairman Details
            chairman_router.delete('/deletemanager/:manager_id',(req, res, next)=>
            {
                //logic to delete Chairman Details
                Chairman.remove({_id: req.params.manager_id}, function(err, result)
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
            
            ///////////////////////////////////////////// END OF SOCIETY TABLE OPERATION ///////////////////////////////////////////////////////
            
            
            // exporting the method to get access outside of Router
            
            module.exports = chairman_router;
            