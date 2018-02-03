//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const CitySchema = Schema({
    country_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'country' },
    state_id: { type: mongoose.Schema.Types.ObjectId, ref: 'state' },
    city_name: {
      type:String,
      required: true ,
      unique:true     
    }
      });
 

const City = module.exports = mongoose.model('city', CitySchema);