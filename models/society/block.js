//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//design database schema of vclinix

const BlockSchema = Schema({

    Superadmin_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'superadmin' },
    Society_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'society' },

    block_name: { 
        type:String,
        required: true ,
     },
     no_of_flats:{
        type:Number

     }
      });
 
const Block = module.exports = mongoose.model('block', BlockSchema);

