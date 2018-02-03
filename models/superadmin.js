//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//design database schema of socity

const SuperadminSchema = Schema({
    superadmin_name: { 
        type:String,
        required: true ,
        unique:true
     },
     password: { 
        type:String,
        required: true ,
     }

      });
 
//on save function the password is get encrypted
SuperadminSchema.pre('save', function(next) {
    var superadmin = this;
    var SALT_FACTOR = 5;
 
    if (!recruiter.isModified('password')) return next();
 
    console.log(superadmin.password) // Check password update
 
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
       if (err) return next(err);
 
       bcrypt.hash(superadmin.password, salt, null, function(err, hash) {
          if (err) return next(err);
          superadmin.password = hash;
          next();
       });
    });
 });



//For authentication we compare the password using bcrypt.compareSync
SuperadminSchema.methods.comparePassword = function(password)
{
     return bcrypt.compareSync(password, this.password);
 };

const Superadmin = module.exports = mongoose.model('superadmin', SuperadminSchema);
