//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//design database schema of vclinix

const SecuritySchema = Schema({

    Superadmin_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'superadmin' },
    Society_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'society' },
    Block_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'block' },
    Manager_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'manager' },
    
    security_name: { 
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
     password:{
        type:String,
        required: true 
     },
     security_status:{
        type: Boolean, default: true 
     }
    });
 
const Security = module.exports = mongoose.model('security', SecuritySchema);
