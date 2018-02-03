//importing modules
const express = require('express');
const block_router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Block = require('../../models/society/block');
var secret = 'Akshay';
var bcrypt = require('bcrypt-nodejs');





//////////////////////////////////  BLOCK TABLE OPERATIONS  //////////////////////////////////////////


//rerieving  Block Details
block_router.get('/blocklist', (req, res, next)=>
{ 
    Block.find(function(err, result)
    {
        res.json(result);
    });
});

// Get the Block relational data
block_router.get('/blocklistdetails/:society_id', (req, res, next)=>
{

    Block.find({Society_id: req.params.society_id},function(err, result)
{
   
    res.json(result);

});
});


//add Block 
block_router.post('/addblock',(req, res, next)=>
{
    Block.findOne({ block_name: req.body.block_name , Society_id:  req.body.society_id}, function(err, result){

        if(!result){
             //logic for add Block Details
    let newBlock = new Block(
        {   Superadmin_id: req.body.superadmin_id,
            Society_id: req.body.society_id,
            block_name: req.body.block_name,
             no_of_flats: req.body.no_of_flats
          
        });
        if( req.body.society_id == null || req.body.society_id == '' || req.body.block_name == null || req.body.block_name == ''  || req.body.no_of_flats == null || req.body.no_of_flats == '' )
        {
            res.json({success: false, message: 'Ensure Block name, No of flats were provided'});
        }
        else
        {
            newBlock.save(function(err, result)
            {
                if(err)
                {
                    res.json({success: false, message: 'Block is exist'});
                }
                else
                { 
                    res.json({success: true, message: 'Block is added successfully!'});
                }
            });
        }
        }
        else{
            res.json({success: false, message: 'Block is exist'});
        }
    });
   
});



//delete Block Details
block_router.delete('/deleteblock/:block_id',(req, res, next)=>
{
    //logic to delete Block Details
    Block.remove({_id: req.params.block_id}, function(err, result)
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

///////////////////////////////////////////// END OF BLOCK TABLE OPERATION ///////////////////////////////////////////////////////


// exporting the method to get access outside of Router

module.exports = block_router;