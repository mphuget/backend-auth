function signin(req, res) {

    let User = require('../models/user');

	User.findOne({username: req.body.account}, function(err, user) {
		if (err)
			throw err;

		if (user.comparePassword(req.body.password)) {

			res.redirect('/profile');
		}
		else
			res.redirect('/');
	});
}

function signup(req, res) {

    let User = require('../models/user');
	let user = new User();

	user.username = req.body.account;
	user.password = req.body.password;

	user.save((err, savedUser) => {

		if (err)
			throw err;

		res.redirect('/');

	});
}

function signout(req, res) {

    res.send("Signout");

}

function profile(req, res) {

    res.send("Profile");

}

module.exports.signin = signin;
module.exports.signup = signup;
module.exports.signout = signout;
module.exports.profile = profile;