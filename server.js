//importing modules
var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app =express();

const superadminroute = require('./routes/superadminroute');
const societyroute = require('./routes/society/societyroute');
const blockroute = require('./routes/society/blockroute');
const managerroute = require('./routes/society/managerroute');
const chairmanroute = require('./routes/society/chairmanroute');
const securityroute = require('./routes/society/securityroute');
const flatroute = require('./routes/society/flatroute');
const flatownerroute = require('./routes/society/flatownerroute');
const tenantroute = require('./routes/society/tenantroute');
const flatmemberroute = require('./routes/society/flatmemberroute');
const visitorroute = require('./routes/society/visitorroute');

//connect to mongodb
mongoose.connect('mongodb://cybercode:cybercode@ds119028.mlab.com:19028/visitant');

//on connection 
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database mongodb @27017');
});

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Error in Database connecrtion:'+err);
    }
});

//port no
const port = process.env.PORT || 8080;

//adding middleware
app.use(cors());

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyparser.json())

//routes

app.use('/api', superadminroute);
app.use('/api', societyroute);
app.use('/api', blockroute);
app.use('/api', managerroute);
app.use('/api', chairmanroute);
app.use('/api', securityroute);
app.use('/api', flatroute);
app.use('/api', flatownerroute);
app.use('/api', tenantroute);
app.use('/api', flatmemberroute);
app.use('/api', visitorroute);



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
  app.listen(port,()=>{
  
      console.log('Server started at port:',+port);
  
  });
  
