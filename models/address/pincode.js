//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;



const PincodeSchema = Schema({
    country_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'contry' },
    state_id: { type: mongoose.Schema.Types.ObjectId, ref: 'state' },
    city_id: { type: mongoose.Schema.Types.ObjectId, ref: 'city' },
    location_id: { type: mongoose.Schema.Types.ObjectId, ref: 'location' },
    pincode: {
      type:Number,
      required: true ,
      unique:true     
    }
      });
 

const Pincode = module.exports = mongoose.model('pincode', PincodeSchema);