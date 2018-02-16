
//importing modules
const express = require('express');
const visitor_router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Visitor = require('../../models/society/visitor');
var secret = 'Akshay';
var bcrypt = require('bcrypt-nodejs');
var multer = require('multer');
var path = require('path')





//////////////////////////////////  Visitor TABLE OPERATIONS  //////////////////////////////////////////


//rerieving  Visitor Details
visitor_router.get('/visitorlist', (req, res, next) => {
    Visitor.find().sort({ _id: -1 }).exec(function (err, result) {
        res.json(result);
    });
});



visitor_router.get('/visitorbysecurity/:security_id', (req, res, next) => {
    Visitor.findById({ _id: req.params.security_id }).sort({ _id: -1 }).exec(function (err, result) {
        res.json(result);
    });
});


// Get the Visitor relational data
visitor_router.get('/visitorlistdetails/:society_id', (req, res, next) => {

    Visitor.find({ Society_id: req.params.society_id }).select('_id Security_id security_name  email contact').sort({ _id: -1 }).exec(function (err, result) {
        Visitor.populate(result, { path: 'Security_id' }, function (err, result) {
            res.json(result);

        });
    });
});


// To get more info about 'multer'.. you can go through https://www.npmjs.com/package/multer..
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads')
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({
    storage: storage
});

visitor_router.post('/addvisitor', upload.any('photo', 'doc'), function (req, res, next) {
    console.log(req.files);



    console.log(req.body);



    var newVisitor = new Visitor({

        Society_id: req.body.society_id,
        Security_id: req.body.security_id,
        visitor_name: req.body.visitor_name,
        email: req.body.email,
        profile_path: req.files[0].filename,
        profile_originalname: req.files[0].originalname,
        document_path: req.files[1].filename,
        document_originalname: req.files[1].originalname,
        vehicle_type: req.body.vehicle_type,
        vehicle_no: req.body.vehicle_no,
        contact: req.body.contact,
        In_time: req.body.in_time,
        whom_to_meet: req.body.flat_id


    });
    if (req.body.visitor_name == null || req.body.visitor_name == '' || req.body.email == null || req.body.email == '' || req.body.contact == null || req.body.contact == '' || req.body.flat_id == null || req.body.flat_id == '') {
        res.json({ success: false, message: 'Ensure  Visitor name, email, contact, whom_to_meet were provided' });
    }
    else {
        newVisitor.save(function (err, result) {
            if (err) {
                res.json({ success: false, message: 'Visitor is exist' + err });
            }
            else {
                res.json({ success: true, message: 'Visitor is registered! ' });
            }
        });
    }

});


//delete Visitor Details
visitor_router.delete('/deletevisitor/:visitor_id', (req, res, next) => {
    //logic to delete Visitor Details
    Visitor.remove({ _id: req.params.visitor_id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

///////////////////////////////////////////// END OF Visitor TABLE OPERATION ///////////////////////////////////////////////////////


// exporting the method to get access outside of Router

module.exports = visitor_router;
