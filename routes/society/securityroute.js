
//importing modules
const express = require('express');
const security_router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Security = require('../../models/society/security');
var secret = 'Akshay';
var bcrypt = require('bcrypt-nodejs');





//////////////////////////////////  SOCIETY TABLE OPERATIONS  //////////////////////////////////////////


//rerieving  Security Details
security_router.get('/securitylist', (req, res, next)=>
{ 
    Security.find().sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
});


security_router.get('/security/:security_id', (req, res, next)=>
{ 
    Security.findById({_id: req.params.security_id}).sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
});


// Get the Security relational data
security_router.get('/securitylistdetails/:society_id', (req, res, next)=>
{

    Security.find({Society_id: req.params.society_id}).select('_id Manager_id security_name  email contact').sort({_id: -1}).exec(function(err, result)
{
    Security.populate( result, {path:'Manager_id'},function(err, result){
    res.json(result);

        });
    });
});

//add Security Registration
security_router.post('/addsecurity',(req, res, next)=>
{
    Security.findOne({ email: req.body.email , Society_id:  req.body.society_id}, function(err, result){

        if(!result){
    //logic for add Security Details
    let newSecurity= new Security(
    {   
        Superadmin_id:  req.body.superadmin_id,
        Society_id: req.body.society_id,
        Manager_id: req.body.manager_id,
        security_name: req.body.security_name,
         email: req.body.email,
         contact: req.body.contact,
        password: req.body.password
      
    });
    if(req.body.security_name == null || req.body.security_name == ''  || req.body.email == null || req.body.email == '' || req.body.contact == null || req.body.contact == '' || req.body.password == null || req.body.password == '')
    {
        res.json({success: false, message: 'Ensure Manager, Chairman name, email, contact, password were provided'});
    }
    else
    {
        newSecurity.save(function(err, result)
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
    res.json({success: false, message: 'Security is exist'});
}
});

});

   
// Security Login Route
// http://localhost:port/api/authenticate
// security_router.post('/authenticatesociety', (req, res, next) =>
// {
//     Security.findOne({ email: req.body.email }).select('_id    email password').exec(function(err, result)
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


// check Security current password
// security_router.post('/societyadmincheckcurrentpassword/:society_id', (req, res, next) =>
// {
//     Security.findById(req.params.society_id).select('password').exec(function(err, result)
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


// change Security current password
// security_router.put('/societyadminchangecurrentpassword/:manager_id',(req, res, next)=>
// { 
    
//     Security.findById(req.params.manager_id).select('password').exec(function(err, result)
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

//  Security reset password
// security_router.put('/superadminsavepassword',function(req, res)
// { 
//     Security.findOne({ email : req.body.email }).select().exec(function(err, recruiter){
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
security_router.put('/updatesecurity/:security_id',(req, res, next)=>
{      
    Security.findByIdAndUpdate(req.params.security_id,
    {  
        $set: 
        { 
            security_name: req.body.security_name,
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
            res.send("Error updating Security Details");
        }
        else
        {
            res.json({success: true ,message: 'Security Details are updated!'}) ;
        }
    });
});

//Update Status
security_router.put('/updatesecuritystatus/:manager_id',(req, res, next)=>
{      
    Security.findByIdAndUpdate(req.params.manager_id,
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


//delete Security Details
security_router.delete('/deletesecurity/:security_id',(req, res, next)=>
{
    //logic to delete Security Details
    Security.remove({_id: req.params.security_id}, function(err, result)
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

module.exports = security_router;