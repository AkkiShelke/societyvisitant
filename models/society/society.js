//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

//design database schema of vclinix

const SocietySchema = Schema({

    Superadmin_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'superadmin' },

    society_name: { 
        type:String,
        required: true ,
     },
     society_reg:{
        type: String,
        unique:true

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
     status:{
        type: Boolean, default: false 
     },
     password:{
        type:String,
        required: true 

     },
     Pincode_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'pincode'
     },
     address:{
        type:String,
        require:true
     }
      });
 

      //on save function the password is get encrypted
      SocietySchema.pre('save', function(next) {
    var society = this;
    var SALT_FACTOR = 5;
 
    if (!society.isModified('password')) return next();
 
    console.log(society.password) // Check password update
 
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
       if (err) return next(err);
 
       bcrypt.hash(society.password, salt, null, function(err, hash) {
          if (err) return next(err);
          society.password = hash;
          next();
       });
    });
 });



//For authentication we compare the password using bcrypt.compareSync
SocietySchema.methods.comparePassword = function(password)
{
     return bcrypt.compareSync(password, this.password);
 };



const Society = module.exports = mongoose.model('society', SocietySchema);

