//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

//design database schema of vclinix

const SecuritySchema = Schema({

    Superadmin_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'superadmin' },
    Society_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'society' },
    Block_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'block' },
    Manager_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'manager' },
    
    Created_on:{
        type:String,
        required: true 
     },
    security_name: { 
        type:String,
        required: true ,
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
     password:{
        type:String,
        required: true 
     },
     security_status:{
        type: Boolean, default: true 
     }
    });
 

      //on save function the password is get encrypted
      SecuritySchema.pre('save', function(next) {
        var security = this;
        var SALT_FACTOR = 5;
     
        if (!security.isModified('password')) return next();
     
        console.log(security.password) // Check password update
     
        bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
           if (err) return next(err);
     
           bcrypt.hash(security.password, salt, null, function(err, hash) {
              if (err) return next(err);
              security.password = hash;
              next();
           });
        });
     });
    
    
    
    //For authentication we compare the password using bcrypt.compareSync
    SecuritySchema.methods.comparePassword = function(password)
    {
         return bcrypt.compareSync(password, this.password);
     };
    


const Security = module.exports = mongoose.model('security', SecuritySchema);
