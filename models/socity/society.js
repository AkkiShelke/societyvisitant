//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//design database schema of vclinix

const SocietySchema = Schema({

    society_name: { 
        type:String,
        required: true ,
        unique:true
     },
     society_email:{
        type:String,
        required: true ,
        unique:true
     },
     password:{
        type:String
     },
     contact:{
        type:Number
     },
     society_no:{
         type:Number
     },
     society_no_of_flats:{
        type:Number

     }
      });
 


const Society = module.exports = mongoose.model('society', SocietySchema);

