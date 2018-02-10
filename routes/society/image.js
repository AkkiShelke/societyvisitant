var express = require('express');
var image_router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
  });
  
  var upload = multer({ storage: storage }).single('documentImage')

  image_router.post('/profile', function (req, res) {
  upload(req, res, function (err) {
    if (err) {

    }
    res.json({
        success: true,
        message: 'Image uploaded'
    });

    // Everything went fine
  })
});

image_router.get('/profilelist', function (req, res) {
    Visitor.find().sort({_id: -1}).exec(function(err, result)
    {
        res.json(result);
    });
  });

module.exports = image_router;