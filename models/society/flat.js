//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//design database schema of vclinix

const FlatSchema = Schema({

    Superadmin_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'superadmin' },
    Society_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'society' },
    Block_id: { type: mongoose.Schema.Types.ObjectId, ref: 'block' },
    Manager_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'manager' },
    Chairman_id: { type: mongoose.Schema.Types.ObjectId, ref: 'chairman' },

    flat_no:{
        type: String
    },
    floor_no:{
        type: String
    },
    flat_status:{
        type: Boolean,
        default: true
     }
 
    });
 
const Flat = module.exports = mongoose.model('flat', FlatSchema);
