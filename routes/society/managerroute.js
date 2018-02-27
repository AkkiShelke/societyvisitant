
//importing modules
const express = require('express');
const manager_router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Manager = require('../../models/society/manager');
var secret = 'Akshay';
var bcrypt = require('bcrypt-nodejs');





//////////////////////////////////  SOCIETY TABLE OPERATIONS  //////////////////////////////////////////


//rerieving  Manager Details
manager_router.get('/managerlist', (req, res, next)=>
{ 
    Manager.find().sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
});

manager_router.get('/manager/:manager_id', (req, res, next)=>
{ 
    Manager.findById({_id: req.params.manager_id}).sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
});

// Get the Manager relational data
manager_router.get('/managerlistdetails/:society_id', (req, res, next)=>
{
    
    Manager.find({Society_id: req.params.society_id}).select('_id Block_id manager_name manager_status  email contact').sort({_id: -1}).exec(function(err, result)
    {
        Manager.populate( result, {path:'Block_id'},function(err, result){
            res.json(result);
            
        });
    });
});

// Get the Manager relational data
manager_router.get('/managerlistbyblock/:block_id', (req, res, next)=>
{
    
    Manager.find({Block_id: req.params.block_id}).select('_id Block_id manager_name manager_status  email contact').sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
        
    });
});

//add Manager Registration
manager_router.post('/addmanager',(req, res, next)=>

{
    Manager.findOne({ email: req.body.email , Society_id:  req.body.society_id}, function(err, result){
        
        if(!result){
            //logic for add Manager Details
            
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
            
            let newManager= new Manager(
                {   
                    Superadmin_id:  req.body.superadmin_id,
                    Society_id: req.body.society_id,
                    Block_id: req.body.block_id,
                    Created_on: today_date,
                    manager_name: req.body.manager_name,
                    email: req.body.email,
                    contact: req.body.contact,
                    password: req.body.password
                    
                });
                if(req.body.manager_name == null || req.body.manager_name == ''  || req.body.email == null || req.body.email == '' || req.body.contact == null || req.body.contact == '' || req.body.password == null || req.body.password == '')
                {
                    res.json({success: false, message: 'Ensure Block, Manager name, email, contact, password were provided'});
                }
                else
                {
                    newManager.save(function(err, result)
                    {
                        if(err)
                        {
                            res.json({success: false, message: 'Manager admin is exist' + err});
                        }
                        else
                        { 
                            res.json({success: true, message: 'Manager is registered! '});
                        }
                    });
                }
            }
            else{
                res.json({success: false, message: 'Manager is exist'});
            }
        });
        
    });
    
    // check Superadmin current password
    manager_router.post('/checkmanagercurrentpassword/:manager_id', (req, res, next) =>
    {
        Manager.findById(req.params.manager_id).select('password').exec(function(err, result)
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
    
    
    // change Manager current password
    manager_router.put('/changemanagercurrentpassword/:manager_id',(req, res, next)=>
    { 
        
        Manager.findById(req.params.manager_id).select('password').exec(function(err, result)
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
    
    //  Society reset password
    // manager_router.put('/superadminsavepassword',function(req, res)
    // { 
    //     Manager.findOne({ email : req.body.email }).select().exec(function(err, recruiter){
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
    manager_router.put('/updatemanager/:manager_id',(req, res, next)=>
    {      
        Manager.findByIdAndUpdate(req.params.manager_id,
            {  
                $set: 
                { 
                    manager_name: req.body.manager_name,
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
                    res.send("Error updating Manager Details");
                }
                else
                {
                    res.json({success: true ,message: 'Manager Details are updated!'}) ;
                }
            });
        });
        
        
        //Update Status
        manager_router.put('/updatemanagerstatus/:manager_id',(req, res, next)=>
        {      
            Manager.findByIdAndUpdate(req.params.manager_id,
                {  
                    $set: 
                    { 
                        manager_status: req.body.status
                    }
                },
                {
                    new: true
                },
                function(err, result)
                {
                    if(err)
                    {
                        res.json({success: false, message:"Error updating status in  Manager list"});
                    }
                    else
                    {
                        if(req.body.status == false){
                            res.json({success: false, message: result.manager_name + " Manager Status is Inactive"});
                            
                        }
                        else{
                            res.json({success: true, message: result.manager_name + " Manager Status is Active"});
                            
                        }
                    }
                });
                
                
            });
            
            
            
            
            
            //delete Manager Details
            manager_router.delete('/deletemanager/:manager_id',(req, res, next)=>
            {
                //logic to delete Manager Details
                Manager.remove({_id: req.params.manager_id}, function(err, result)
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
            
            module.exports = manager_router;