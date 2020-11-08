let router = require('express').Router();

router.post('/signin', function(req, res) {

  res.send("/signin");

});


router.post('/signout', function(req, res) {

  res.send("/signout");

});

router.post('/signup', function(req, res) {

	res.send("/signup");

});

router.get('/profile', function(req, res) {

	res.send("/profile");

});


module.exports = router;
