//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const StateSchema = Schema({
    country_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'contry' },
    state_name:{
      type:String,
      required: true ,
      unique:true     
    }
    
      });
 

const State = module.exports = mongoose.model('state', StateSchema);