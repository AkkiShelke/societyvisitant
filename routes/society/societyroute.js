
//importing modules
const express = require('express');
const society_router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Society = require('../../models/society/society');
var secret = 'Akshay';
var bcrypt = require('bcrypt-nodejs');





//////////////////////////////////  SOCIETY TABLE OPERATIONS  //////////////////////////////////////////


//rerieving  Society Details
society_router.get('/societylist', (req, res, next)=>
{ 
    Society.find(function(err, result)
    {
        res.json(result);
    });
});

// Get the Society relational data
society_router.get('/societylistdetails', (req, res, next)=>
{

Society.find().select('_id society_name society_reg email contact status address Pincode_id').exec(function(err, result)
{
    Society.populate( result, {path:'Pincode_id', populate:[
        { path: 'country_id' },
        { path: 'state_id', select:'state_name' },
        { path: 'city_id', select:'city_name' },
        { path: 'location_id', select:'location_name' },
    
    ]},function(err, result){
    res.json(result);

        });
    });
});

//add Society Registration
society_router.post('/addsociety',(req, res, next)=>
{
    //logic for add Society Details
    let newSociety = new Society(
    {   
        Superadmin_id:  req.body.superadmin_id,
        society_name: req.body.society_name,
         society_reg: req.body.society_reg,
         email: req.body.email,
         contact: req.body.contact,
        password: req.body.password,
        address: req.body.address,
        Pincode_id: req.body.pincode_id
      
    });
    if(req.body.society_name == null || req.body.society_name == ''  || req.body.society_reg == null || req.body.society_reg == '' || req.body.email == null || req.body.email == '' || req.body.contact == null || req.body.contact == '' || req.body.password == null || req.body.password == '')
    {
        res.json({success: false, message: 'Ensure Society name, society reg, email, contact, password were provided'});
    }
    else
    {
        newSociety.save(function(err, result)
        {
            if(err)
            {
                res.json({success: false, message: 'Society is exist' });
            }
            else
            { 
                res.json({success: true, message: 'Society is registered! '});
            }
        });
    }
});

   
// Society Login Route
// http://localhost:port/api/authenticate
society_router.post('/authenticatesocietyadmin', (req, res, next) =>
{
    Society.findOne({ email: req.body.email }).select('_id email password').exec(function(err, result)
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
                      
                      
                        res.json({ success: true, message: 'Society Admin Login successfully  ',
                        token: 'JWT '+token,
                        societyadmin:{
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
// society_router.post('/societyadmincheckcurrentpassword/:society_id', (req, res, next) =>
// {
//     Society.findById(req.params.society_id).select('password').exec(function(err, result)
//     {  
       
      
//         if(err)
//         { 
//             throw err;
//         }
//         if(!result)
//         {
//             res.json({ success: false, message: 'Please enter valid current password' });
//         } 
//         else if(result)
//         {
//             if(req.body.password)
//             {
//                 var validPassword = result.comparePassword(req.body.password);
//                if(validPassword){
//                 res.json({ success: true, message: 'Current password is correct'});

//                }
//                else{
//                 res.json({ success: false, message: 'Please enter valid current Password' });

//                }

//             }
//             else
//             {   
//                 res.json({ success: false, message: 'No current password provided' });
          
//              }
//         }
        

//     });

    
// });


// change Society current password
// society_router.put('/societyadminchangecurrentpassword/:society_id',(req, res, next)=>
// { 
    
//     Society.findById(req.params.society_id).select('password').exec(function(err, result)
//     {  
       
//         console.log(req.body.id);
//         console.log(result);
//         if(err)
//         { 
//             throw err;
//         }
//         if(!result)
//         {
//             res.json({ success: false, message: 'Please enter valid current password' });
//         } 
//         else if(result)
//         {                    

//             if(req.body.password)
//             {
//                 var validPassword = result.comparePassword(req.body.password);
//                if(validPassword){
//                     if(err) throw err;
//                     if(req.body.newpassword == null || req.body.newpassword == '')
//                     {
//                         res.json({ success: false, message: 'Password not provided'});
            
//                     } else
//                         {
//                         result.password = req.body.newpassword;
                
//                         result.save(function(err){
//                             if(err){
//                                 res.json({ success: false, message: err });
//                             }else{
//                                 res.json({ success: true, message: 'Password has been reset!' });
                
//                             }
//                         });
//                     }

//                }
//                else{
//                 res.json({ success: false, message: 'Please enter valid current Password' });

//                }
//             }
//             else
//             {   
//                 res.json({ success: false, message: 'No current password provided' });
//              }
//         }
        

//     });

// });

//  Society reset password
// society_router.put('/superadminsavepassword',function(req, res)
// { 
//     Society.findOne({ email : req.body.email }).select().exec(function(err, recruiter){
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


//Update Status
society_router.put('/updatesocietystatus/:society_id',(req, res, next)=>
{      
    Society.findByIdAndUpdate(req.params.society_id,
    {  
        $set: 
        { 
            status: req.body.status
        }
    },
    {
        new: true
    },
    function(err, result)
    {
        if(err)
        {
            res.send("Error updating status in Society list");
        }
        else
        {
            res.json(result);
        }
    });
});


//delete Society Details
society_router.delete('/deletesociety/:society_id',(req, res, next)=>
{
    //logic to delete Society Details
    Society.remove({_id: req.params.society_id}, function(err, result)
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

module.exports = society_router;