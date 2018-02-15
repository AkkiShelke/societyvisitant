//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;



const VisitorSchema = Schema({


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
     image_path: {
        type: String,
        required: true,
        trim: true
    },
    image_originalname: {
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
     In_time:{
        type: String,
        required:true
     },
     Out_time:{
        type: String,
        required: true
     },
     whom_to_meet: {type: mongoose.Schema.Types.ObjectId, ref: 'flat' },
     visitor_status:{
        type: Boolean, default: true 
     }
    });
   
 
const Visitor = module.exports = mongoose.model('visitor', VisitorSchema);






 
