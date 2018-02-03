//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//design database schema of vclinix

const WingSchema = Schema({
    Society_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'society' },

    wing_name: { 
        type:String,
        required: true ,
     },
     wing_no_of_flats:{
        type:Number

     }
      });
 
const Wing = module.exports = mongoose.model('wing', WingSchema);

