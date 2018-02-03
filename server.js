//importing modules
var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app =express();

const superadminroute = require('./routes/superadminroute');

//connect to mongodb
mongoose.connect('mongodb://akshay:akshay@ds119028.mlab.com:19028/visitant');
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

//body - parser
app.use(bodyparser.json());

//routes

app.use('/api', superadminroute);



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
  app.listen(port,()=>{
  
      console.log('Server started at port:',+port);
  
  });