
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
superadmin_router.get('/superadminlist', (req, res, next)=>
{
    Superadmin.find(function(err, result)
    {
        res.json(result);
    });
});


//add addSuperadmin Registration
superadmin_router.post('/addsuperadmin',(req, res, next)=>
{
    //logic for add Superadmin Details
    let newSuperadmin = new Superadmin(
    {
        superadmin_email: req.body.email,
        password: req.body.password
      
    });
    if(req.body.email == null || req.body.email == '' || req.body.password == null || req.body.password == '')
    {
        res.json({success: false, message: 'Ensure superadmin Id, password were provided'});
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
// http://localhost:port/https://visitant.herokuapp.com/api/authenticate

superadmin_router.post('/authenticatesuperadmin', (req, res, next) =>
{
    Superadmin.findOne({ superadmin_email: req.body.email }).select('_id superadmin_email password').exec(function(err, result)
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
                      
                      
                        res.json({ success: true, message: 'Super Admin Login successfully  ',
                        token: 'JWT '+token,
                        superadmin:{
                            id: result._id,
                            email: result.superadmin_email,
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



/////////////// Starting of Country ////////////////////
//get all country data
superadmin_router.get('/country', (req, res, next)=>
{
    Country.find(function(err, Country)
    {
        res.json(Country);
    });
});

//specific recruiters Details
superadmin_router.get('/country/:id', function(req, res)
{
    Country.findOne({_id: req.params.id}, function(err, Country)
    {
        res.json(Country);
    });
});

//add  Country
superadmin_router.post('/addcountry',(req, res, next)=>
{    
    //logic for add Organization Details
    let newCountry = new Country(
    {
        country_name: req.body.country_name  
            
      
    });
    if(req.body.country_name == null || req.body.country_name == '')
    {
        res.json({success: false, message: 'plz enter country '});
    }
    else
    {
        newCountry.save(function(err, Country)
        {
            if(err)
            {
                res.json({success: false, message: 'country existed'});
            }
            else
            { 
                res.json({success: true, message: 'Country is inserted'});
            }
        });
    }
});

//delete Country
superadmin_router.delete('/deletecountry/:id',(req, res, next)=>{
    //logic to delete country
    Country.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
            } 
    });
});
/////////////// End OF Country ////////////////////


/////////////// Staring of State ////////////////////
//get all country data
superadmin_router.get('/state', (req, res, next)=>
{
    State.find(function(err, State)
    {
            res.json(State);
     
   });
});

// // Get the relational data

superadmin_router.get('/state/:country_id', (req, res, next)=>
{
    State.find({country_id: req.params.country_id},function(err, State)
    {
        mongoose.model('state').populate(State, {path: 'country_id'}, function(err, State){
            res.json(State);
            
        }); 
   });
});


//add  State
superadmin_router.post('/addstate',(req, res, next)=>
{    
    //logic for add State Details
    let newState = new State(
    {
        country_id: req.body.country_id,
        state_name: req.body.state_name 
            
      
    });
    if(req.body.state_name == null || req.body.state_name == '' || req.body.country_id == null || req.body.country_id == '')
    {
        res.json({success: false, message: 'plz enter State '});
    }
    else
    { 
        newState.save(function(err, State)
        {
            if(err)
            {
                res.json({success: false, message: 'State existed'});
            }
            else
            { 
                res.json({success: true, message: 'State is inserted'});
            }
        });
    }
   
});

//delete state
superadmin_router.delete('/deletestate/:id',(req, res, next)=>{
    //logic to delete state
    State.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
            } 
    });
});

/////////////// End OF State ////////////////////



/////////////// Starting of City ////////////////////
//get all country data

superadmin_router.get('/city', (req, res, next)=>
{
    City.find(function(err, City)
    {
            res.json(City);
     
   });
});

// // Get the relational data

superadmin_router.get('/city/:state_id', (req, res, next)=>
{
     City.find({state_id: req.params.state_id})
    .populate({path: 'state_id'})
    .populate({path: 'country_id'})
    .exec(function (err, results) {
         // callback
         res.json(results);
    });
   
});





//add  Country
superadmin_router.post('/addcity',(req, res, next)=>
{    
    State.findOne({_id: req.body.state_id}, function(err, State)
    {

    //logic for add Organization Details
    let newCity = new City(
    {
        country_id: State.country_id,
        state_id: State._id,
        city_name: req.body.city_name

   
            
      
    });
    if(req.body.city_name == null || req.body.city_name == '' || req.body.state_id == null || req.body.state_id == '')
    {
        res.json({success: false, message: 'plz enter City '});
    }
    else
    { 
        newCity.save(function(err, City)
        {
            if(err)
            {
                res.json({success: false, message: 'City existed'});
            }
            else
            { 
                res.json({success: true, message: 'City is inserted'});
            }
        });
    }
});
});

//delete Country
superadmin_router.delete('/deletecity/:id',(req, res, next)=>{
    //logic to delete country
    City.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
            } 
    });
});

/////////////// End OF City ////////////////////



/////////////// Staring of Location ////////////////////
//get all country data

superadmin_router.get('/location', (req, res, next)=>
{
    Location.find(function(err, Location)
    {
            res.json(Location);
     
   });
});

// // Get the relational data

superadmin_router.get('/location/:city_id', (req, res, next)=>
{ 
    Location.find({city_id: req.params.city_id})
    .populate({path: 'country_id'})
    .populate({path: 'state_id'})
    .populate({path: 'city_id'})
    .exec(function (err, results) {
         // callback
         res.json(results);
    });
   
});





//add  Country
superadmin_router.post('/addlocation',(req, res, next)=>
{   
    City.findOne({_id: req.body.city_id}, function(err, City)
    {
 
        
    //logic for add Organization Details
    let newLocation = new Location (
    {
        country_id: City.country_id,
        state_id: City.state_id,
        city_id: City._id,
        location_name: req.body.location_name

    });
    if(req.body.location_name == null || req.body.location_name == '' || req.body.city_id == null || req.body.city_id == '')
    {
        res.json({success: false, message: 'plz enter Location '});
    }
    else
    { 
        newLocation.save(function(err, Location)
        {
            if(err)
            {
                    console.log(err);
                res.json({success: false, message: 'Location existed'});
            }
            else
            { 
                res.json({success: true, message: 'Location is inserted'});
            }
        });
    }
});
});

//delete Country
superadmin_router.delete('/deletelocation/:id',(req, res, next)=>{
    //logic to delete country
    Location.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
            } 
    });
});

/////////////// End OF Location ////////////////////




/////////////// Staring of Pincode ////////////////////
//get all country data

superadmin_router.get('/pincode', (req, res, next)=>
{
    Pincode.find(function(err, result)
    {
            res.json(result);
     
   });
});

// // Get the relational data

superadmin_router.get('/pincode/:location_id', (req, res, next)=>
{
    Pincode.find({location_id: req.params.location_id})
    .populate({path: 'country_id'})
    .populate({path: 'state_id'})
    .populate({path: 'city_id'})
    .populate({path: 'location_id'})
    .exec(function (err, results) {
         // callback
         res.json(results);
    });
   
});





//add  Country
superadmin_router.post('/addpincode',(req, res, next)=>
{    
    
    Location.findOne({_id: req.body.location_id}, function(err, Location)
    {
 

    //logic for add Organization Details
    let newPincode = new Pincode(
    {
        country_id: Location.country_id,
        state_id: Location.state_id,
        city_id: Location.city_id,
        location_id: Location._id,
        pincode: req.body.pincode

    });
    if(req.body.pincode == null || req.body.pincode == '' || req.body.location_id == null || req.body.location_id == '')
    {
        res.json({success: false, message: 'plz enter Pincode '});
    }
    else
    { 
        newPincode.save(function(err, result)
        {
            if(err)
            {
                res.json({success: false, message: 'pincode existed'});
            }
            else
            { 
                res.json({success: true, message: 'pincode is inserted'});
            }
        });
    }
});
});
//delete zip_code
superadmin_router.delete('/deletepincode/:id',(req, res, next)=>{
    //logic to delete zip_code
    pincode.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
            } 
    });
});

/////////////// End OF Location ////////////////////



// exporting the method to get access outside of Router

module.exports = superadmin_router;