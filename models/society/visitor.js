//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
     contact:{
        type:Number,
        unique: true
     },
     visitor_status:{
        type: Boolean, default: true 
     }
    });
 
const Visitor = module.exports = mongoose.model('visitor', VisitorSchema);
