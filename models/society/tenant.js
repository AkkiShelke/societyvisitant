//importing modules
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

//design database schema of vclinix

const TenantSchema = Schema({

    Superadmin_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'superadmin' },
    Society_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'society' },
    Manager_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'manager' },
    
    Flatowner_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'flatowner' },
    tenant_name: { 
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
     tenant_status:{
        type: Boolean,
        defalut: true
     }
    });

       //on save function the password is get encrypted
       TenantSchema.pre('save', function(next) {
        var tenant = this;
        var SALT_FACTOR = 5;
     
        if (!tenant.isModified('password')) return next();
     
        console.log(tenant.password) // Check password update
     
        bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
           if (err) return next(err);
     
           bcrypt.hash(tenant.password, salt, null, function(err, hash) {
              if (err) return next(err);
              tenant.password = hash;
              next();
           });
        });
     });
    
    
    
    //For authentication we compare the password using bcrypt.compareSync
    TenantSchema.methods.comparePassword = function(password)
    {
         return bcrypt.compareSync(password, this.password);
     };
    
 
const Tenant = module.exports = mongoose.model('tenant', TenantSchema);
