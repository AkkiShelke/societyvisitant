//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//design database schema of vclinix

const FlatmemberSchema = Schema({

    Superadmin_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'superadmin' },
    Society_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'society' },

    Manager_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'manager' },

    Flatowner_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'flatowner' },
    Tenant_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'tenant'},
    
    flatmember_name: { 
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
     flatmember_status:{
        type: Boolean,
        default: true
     }
    });
 
const Flatmember = module.exports = mongoose.model('flatmember', FlatmemberSchema);
