//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//design database schema of vclinix

const CountrySchema = Schema({
    country_name: { 
        type:String,
        required: true ,
        unique:true
     }
      });
 


const Contry = module.exports = mongoose.model('contry', CountrySchema);

