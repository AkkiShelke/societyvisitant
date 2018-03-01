//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;



const VisitorSchema = Schema({


    Society_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'society' },
    Security_id: {type: mongoose.Schema.Types.ObjectId, ref: 'security' },
    Flat_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'flat' }],
    visitor_name: { 
        type:String,
        required: true ,
     },
     email:{
        type:String,
        required: true ,
        unique:true
     },
     profile_path: {
        type: String,
        required: true,
        trim: true
    },
    profile_originalname: {
        type: String,
        required: true
    },
    document_path: {
        type: String,
        required: true,
        trim: true
    },
    document_originalname: {
        type: String,
        required: true
    },
     contact:{
        type:Number,
        unique: true
     },
	vehicle_type:{
	    type: String,	
	},
	vehicle_no:{
	    type: String,	
    },
    Created_on:{
        type: Date,
        required: true 
    },
     In_time:{
        type: String,
        required:true
     },
     Out_time:{
        type: String,
        default: "-:-"
     },

     visitor_status:{
        type: Boolean, default: true 
     }
    });
   
 
const Visitor = module.exports = mongoose.model('visitor', VisitorSchema);






 
