//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

//design database schema of vclinix

const ManagerSchema = Schema({

    Superadmin_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'superadmin' },
    Society_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'society' },
    Block_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'block' },

    manager_name: { 
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
     }
    });

         //on save function the password is get encrypted
         ManagerSchema.pre('save', function(next) {
            var manager = this;
            var SALT_FACTOR = 5;
         
            if (!manager.isModified('password')) return next();
         
            console.log(manager.password) // Check password update
         
            bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
               if (err) return next(err);
         
               bcrypt.hash(manager.password, salt, null, function(err, hash) {
                  if (err) return next(err);
                  manager.password = hash;
                  next();
               });
            });
         });
        
        
        
        //For authentication we compare the password using bcrypt.compareSync
        ManagerSchema.methods.comparePassword = function(password)
        {
             return bcrypt.compareSync(password, this.password);
         };
        
 
const Manager = module.exports = mongoose.model('manager', ManagerSchema);

