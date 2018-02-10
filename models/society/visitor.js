//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = mongoose.Schema;
var multer = require('multer');
//design database schema of vclinix

const VisitorSchema = Schema({

    Superadmin_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'superadmin' },
    Society_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'society' },
    Security_id: {type: mongoose.Schema.Types.ObjectId, ref: 'security' },
    
    visitor_name: { 
        type:String,
        required: true ,
     },
     email:{
        type:String,
        required: true ,
        unique:true
     },
     img: { 
         data: Buffer, contentType: String
         },
     contact:{
        type:Number,
        unique: true
     },
     In_time:{
        type: String,
        required
     },
     Out_time:{
        type: String,
        required
     },
     whom_to_meet: {type: mongoose.Schema.Types.ObjectId, ref: 'flat' },
     visitor_status:{
        type: Boolean, default: true 
     }
    });
 
const Visitor = module.exports = mongoose.model('visitor', VisitorSchema);
