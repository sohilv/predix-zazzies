var express = require('express');
var router = express.Router();

/* GET index page. */

router.use(function(req,res,next){
  // console.log('index.html from router - index.js');
  next();
});

router.get('/', function(req, res, next) {
  res.sendFile('/../public/index.html', { root: __dirname });
});
router.get('/index', function(req, res, next) {
  res.sendFile('index.html', { root: __dirname });
});

module.exports = router;
