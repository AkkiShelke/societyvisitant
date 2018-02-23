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
            res.json({success: false, message: 'Flat no is exist'});

        }
});
});

//add Flat 
flat_router.post('/addflat',(req, res, next)=>
{
    Flat.findOne({ flat_no: req.body.flat_no , Chairman_id:  req.body.chairman_id}, function(err, result){

        if(!result){
             //logic for add Flat Details

             var todate=new Date().getDate();
             var tomonth=new Date().getMonth()+1;
             var toyear=new Date().getFullYear();
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
