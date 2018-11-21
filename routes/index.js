var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('commons/sign-up.ejs', { title: 'Sign Up' });
});

router.get('/signin', function(req, res, next) {
  res.render('commons/sign-in.ejs', { title: 'Sign In' });
});

module.exports = router;
