/**
 * Describes methods to create, retrieve, update, and delete users
 * @class
 */
function Users() {
	this.bcrypt   = require('bcrypt');
	this.validate = require('../../lib/validation');
	this.users    = require('../models/users');
};

/**
 * Validate user input and create user
 * @param {object} req express request object
 * @param {object} res express response object
 * @param {Users~createCallback} cFunction callback function that handles user creation status
 */
Users.prototype.create = function(req, res, cFunction) {
	var allowedAge = 1000 * 60 * 5; // 5 minutes in milliseconds

	// only do other validation if form-token is valid
	if (this.validate.formToken(req.session.token, req.body._once)) {
		delete req.session.token;
		let user = {},
			error = false;

		// validate reCaptcha
		if (req.body['g-recaptcha-response'] === undefined
		    || req.body['g-recaptcha-response'] === ''
			|| req.body['g-recaptcha-response'] === null
			|| req.body['g-recaptcha-response'].length === 0) {
			req.flash('error', res.__('Please select captcha'));
			error = true;
		}
		// do check on reCaptcha validation with google API
		else {
			if (this.validate.reCaptcha(req.body['g-recaptcha-response'])) {
				req.flash('error', res.__('Captcha validation failed'));
				error = true;
			}
		}

		// validate username
		if (/[a-zæøåäöü0-9\-_ ]+$/i.test(req.body.username))
			user.username = req.body.username;
		else {
			req.flash('error', res.__('Invalid username'))
			error = true
		}

		// validate email
		if (this.validate.email(req.body.email)) user.email = req.body.email;
		else {
			req.flash('error', res.__('Invalid email'));
			error = true;
		}
		
		// validate password
		if (req.body.password.length > 0 && this.validate.inputMatch(req.body.password, req.body.passwordRepeat))
			user.password = this.bcrypt.hashSync(req.body.password, this.bcrypt.genSaltSync(12));
		else {
			req.flash('error', res.__('Invalid password'));
			error = true;
		}

		// redirect to form on error
		if (error)
			cFunction(false);

		// create user and redirect to root
		else {
			user.createdAt = new Date();
			let temp = new this.users(user);
			temp.save(function (error) {
				if (error)
					cFunction(false);
				cFunction(true);
			})
		}
	}
	// redirect on invalid form-token
	else {
		delete req.session.token;
		req.flash('error', res.__('Session has expired'));
		cFunction(false);
	}
};

module.exports = Users;