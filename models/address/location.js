
//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const LocationSchema = Schema({
    country_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'country' },
    state_id: { type: mongoose.Schema.Types.ObjectId, ref: 'state' },
    city_id: { type: mongoose.Schema.Types.ObjectId, ref: 'city' },
    location_name: {
      type:String,
      required: true ,
      unique:true     
    }
      });
 

const Location = module.exports = mongoose.model('location', LocationSchema);