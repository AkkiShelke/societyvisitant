//importing modules
const express = require('express');
const flat_router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Flat = require('../../models/society/flat');
var secret = 'Akshay';
var bcrypt = require('bcrypt-nodejs');





//////////////////////////////////  Flat TABLE OPERATIONS  //////////////////////////////////////////


//rerieving  Flat Details
flat_router.get('/flatlist', (req, res, next)=>
{ 
    Flat.find(function(err, result)
    {
        res.json(result);
    });
});

// Get the Flat relational data
flat_router.get('/flatlistdetails/:society_id', (req, res, next)=>
{
    
    Flat.find({Society_id: req.params.society_id}).sort({_id: -1}).exec(function(err, result)
    {
        Flat.populate( result, {path:'Block_id Manager_id Chairman_id'},function(err, result){
            res.json(result);
            
        });
    });
});

//Check Flat 
flat_router.post('/checkflat',(req, res, next)=>
{
    Flat.findOne({ flat_no: req.body.flat_no , Chairman_id:  req.body.chairman_id}).sort({_id: -1}).exec( function(err, result){
        if(!result){
            res.json({success: true, });
            
        }
        else{
            res.json({success: false, message: 'Flat no is exist', result});
            
        }
    });
});

//add Flat 
flat_router.post('/addflat',(req, res, next)=>
{
    Flat.findOne({ flat_no: req.body.flat_no , Chairman_id:  req.body.chairman_id}, function(err, result){
        
        if(!result){
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
            
            let newFlat = new Flat(
                {   Superadmin_id: req.body.superadmin_id,
                    Society_id: req.body.society_id,
                    Block_id: req.body.block_id,
                    Manager_id: req.body.manager_id,
                    Chairman_id: req.body.chairman_id,
                    Created_on: today_date,
                    
                    flat_no: req.body.flat_no,
                    floor_no: req.body.floor_no,
                    flat_status: req.body.flat_status
                    
                });
                if( req.body.flat_no == null || req.body.flat_no == '' || req.body.floor_no == null || req.body.floor_no == '' )
                {
                    res.json({success: false, message: 'Ensure Flat no, Floor no were provided'});
                }
                else
                {
                    newFlat.save(function(err, result)
                    {
                        if(err)
                        {
                            res.json({success: false, message: 'Flat no is exist'});
                        }
                        else
                        { 
                            res.json({success: true, message: 'Flat is added successfully!', result});
                        }
                    });
                }
            }
            else{
                res.json({success: false, message: 'Flat no is exist'});
            }
        });
        
    });
    
    
    //Update Status
    flat_router.put('/updateflatstatus/:flat_id',(req, res, next)=>
    {      
        Flat.findByIdAndUpdate(req.params.flat_id,
            {  
                $set: 
                { 
                    flat_status: req.body.status
                }
            },
            {
                new: true
            },
            function(err, result)
            {
                if(err)
                {
                    res.send("Error updating status in Flat list");
                }
                else
                {
                    if(req.body.status == false){
                        res.json({success: false, message: result.flat_no + " Flat Status is Inactive"});
                        
                    }
                    else{
                        res.json({success: true, message: result.flat_no + " Flat Status is Active"});
                        
                    }
                }
            });
        });
        
        //delete Flat Details
        flat_router.delete('/deleteflat/:flat_id',(req, res, next)=>
        {
            //logic to delete Flat Details
            Flat.remove({_id: req.params.flat_id}, function(err, result)
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
        
        module.exports = flat_router;
        