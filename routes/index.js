let router = require('express').Router();
let controller = require("../controllers");

router.post('/signin', function(req, res) {

  controller.signin(req, res);

});


router.post('/signout', function(req, res) {

    controller.signout(req, res);

});

router.post('/signup', function(req, res) {

	controller.signup(req, res);

});

router.get('/profile', function(req, res) {

	controller.profile(req, res);

});


module.exports = router;
