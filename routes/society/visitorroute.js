
//importing modules
const express = require('express');
const visitor_router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Visitor = require('../../models/society/visitor');
var secret = 'Akshay';
var bcrypt = require('bcrypt-nodejs');





//////////////////////////////////  Visitor TABLE OPERATIONS  //////////////////////////////////////////


//rerieving  Visitor Details
visitor_router.get('/visitorlist', (req, res, next)=>
{ 
    Visitor.find().sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
});


visitor_router.get('/visitorbysecurity/:security_id', (req, res, next)=>
{ 
    Visitor.findById({_id: req.params.security_id}).sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
});


// Get the Visitor relational data
visitor_router.get('/visitorlistdetails/:society_id', (req, res, next)=>
{

    Visitor.find({Society_id: req.params.society_id}).select('_id Security_id security_name  email contact').sort({_id: -1}).exec(function(err, result)
{
    Visitor.populate( result, {path:'Security_id'},function(err, result){
    res.json(result);

        });
    });
});

visitor_router.post('/photo',(req,res , next)=>
{
    let newVisitor = new Visitor();
    newVisitor.img.data = fs.readFileSync(req.files.userPhoto.path)
    newVisitor.img.contentType = 'image/png';
    newVisitor.save();
   });

//add Security Registration
visitor_router.post('/addvisitor',(req, res, next)=>
{
    Visitor.findOne({ email: req.body.email , Society_id:  req.body.society_id}, function(err, result){

        if(!result){
    //logic for add Security Details
    let newVisitor= new Visitor(
    {   
        Superadmin_id:  req.body.superadmin_id,
        Society_id: req.body.society_id,
        Manager_id: req.body.manager_id,
      visitor_name: req.body.visitor_name,
     email: req.body.email,
     img: req.body.img,
     contact: req.body.contact,
     In_time: req.body.in_time,
     Out_time: req.body.out_time,
     whom_to_meet: req.body.flat_id
      
    });
    if(req.body.visitor_name == null || req.body.visitor_name == ''  || req.body.email == null || req.body.email == '' || req.body.contact == null || req.body.contact == '')
    {
        res.json({success: false, message: 'Ensure  Visitor name, email, contact, password were provided'});
    }
    else
    {
        newVisitor.save(function(err, result)
        {
            if(err)
            {
                res.json({success: false, message: 'Visitor is exist' + err});
            }
            else
            { 
                res.json({success: true, message: 'Visitor is registered! '});
            }
        });
    }
}
else{
    res.json({success: false, message: 'Visitor is exist'});
}
});

});




//delete Visitor Details
visitor_router.delete('/deletevisitor/:visitor_id',(req, res, next)=>
{
    //logic to delete Visitor Details
    Visitor.remove({_id: req.params.visitor_id}, function(err, result)
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

///////////////////////////////////////////// END OF Visitor TABLE OPERATION ///////////////////////////////////////////////////////


// exporting the method to get access outside of Router

module.exports = visitor_router;
