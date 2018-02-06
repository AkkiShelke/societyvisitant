
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
    Chairman.find(function(err, result)
    {
        res.json(result);
    });
});

// Get the Chairman relational data
chairman_router.get('/chairmanlistdetails/:society_id', (req, res, next)=>
{

    Chairman.find({Society_id: req.params.society_id}).select('_id Manager_id chairman_name  email contact').exec(function(err, result)
{
    Chairman.populate( result, {path:'Manager_id'},function(err, result){
    res.json(result);

        });
    });
});

// Get the Chairman relational data
chairman_router.get('/chairmanlistbymanager/:manager_id', (req, res, next)=>
{

    Chairman.find({Manager_id: req.params.manager_id}).select('_id Manager_id chairman_name  email contact').exec(function(err, result)
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
    let newChairman= new Chairman(
    {   
        Superadmin_id:  req.body.superadmin_id,
        Society_id: req.body.society_id,
        Manager_id: req.body.manager_id,
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

   
// Chairman Login Route
// http://localhost:port/api/authenticate
// chairman_router.post('/authenticatesociety', (req, res, next) =>
// {
//     Chairman.findOne({ email: req.body.email }).select('_id    email password').exec(function(err, result)
//     {  
       
      
//         if(err)
//         { 
//             throw err;
//         }
//         if(!result)
//         {
//             res.json({ success: false, message: 'Please enter valid Email ID' });
//         } 
//         else if(result)
//         {
//             if(req.body.password)
//             {
//                 var validPassword = result.comparePassword(req.body.password);
//                 if(!validPassword)
//                 {
//                     res.json({ success: false, message: 'Please enter valid Password' });
//                 }
//                 else
//                 {   
//                     // res.json({ success: true, message: 'authenticate'});
//                     //Create the token for Superadmin-details
//                     const token = jwt.sign(result.toJSON(), secret, {
//                         expiresIn: 604800 // 1 week
//                       });
                      
                      
//                         res.json({ success: true,
//                         token: 'JWT '+token,
//                         recruiter:{
//                             id: result._id,
//                             email: result.email,
//                             message: 'Authenticated'
                           
//                         },
                                                                       
//                     });        
                
//                  }
//             }
//             else 
//             {
//                 res.json({ success: false, message: 'No password provided' });
//             }
        
//         }
        

//     });

    
// });


// check Chairman current password
// chairman_router.post('/societyadmincheckcurrentpassword/:society_id', (req, res, next) =>
// {
//     Chairman.findById(req.params.society_id).select('password').exec(function(err, result)
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


// change Chairman current password
// chairman_router.put('/societyadminchangecurrentpassword/:manager_id',(req, res, next)=>
// { 
    
//     Chairman.findById(req.params.manager_id).select('password').exec(function(err, result)
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


//Update Status
chairman_router.put('/updatesocietystatus/:manager_id',(req, res, next)=>
{      
    Chairman.findByIdAndUpdate(req.params.manager_id,
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
            res.send("Error updating status in Manager list");
        }
        else
        {
            res.json(result);
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