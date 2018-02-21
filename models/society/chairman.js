//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

//design database schema of vclinix

const ChairmanSchema = Schema({

    Superadmin_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'superadmin' },
    Society_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'society' },
    Manager_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'manager' },

    Created_on:{
        type:String,
        required: true 
     },

    chairman_name: { 
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
     chairman_status:{
        type: Boolean, default: true 
     }
    });
          //on save function the password is get encrypted
          ChairmanSchema.pre('save', function(next) {
            var chairman = this;
            var SALT_FACTOR = 5;
         
            if (!chairman.isModified('password')) return next();
         
            console.log(chairman.password) // Check password update
         
            bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
               if (err) return next(err);
         
               bcrypt.hash(chairman.password, salt, null, function(err, hash) {
                  if (err) return next(err);
                  chairman.password = hash;
                  next();
               });
            });
         });
        
        
        
        //For authentication we compare the password using bcrypt.compareSync
        ChairmanSchema.methods.comparePassword = function(password)
        {
             return bcrypt.compareSync(password, this.password);
         };
const Chairman = module.exports = mongoose.model('chairman', ChairmanSchema);
