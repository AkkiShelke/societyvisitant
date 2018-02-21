//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

//design database schema of vclinix

const FlatownerSchema = Schema({

    Superadmin_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'superadmin' },
    Society_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'society' },
    Manager_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'manager' },
    
    Flat_id: { type: mongoose.Schema.Types.ObjectId, ref: 'flat' },
    
    Created_on:{
        type:String,
        required: true 
     },
    flatowner_name: { 
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
     flatowner_status:{
        type: Boolean,
        default:true
     },
     password:{
        type:String,
        required: true 
     }
    });
 
      //on save function the password is get encrypted
      FlatownerSchema.pre('save', function(next) {
        var flatowner = this;
        var SALT_FACTOR = 5;
     
        if (!flatowner.isModified('password')) return next();
     
        console.log(flatowner.password) // Check password update
     
        bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
           if (err) return next(err);
     
           bcrypt.hash(flatowner.password, salt, null, function(err, hash) {
              if (err) return next(err);
              flatowner.password = hash;
              next();
           });
        });
     });
    
    
    
    //For authentication we compare the password using bcrypt.compareSync
    FlatownerSchema.methods.comparePassword = function(password)
    {
         return bcrypt.compareSync(password, this.password);
     };
    


const Flatowner = module.exports = mongoose.model('flatowner', FlatownerSchema);
