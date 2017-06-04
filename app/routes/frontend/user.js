const create = require('../../../lib/create');

module.exports = function (app) {
	app.get('/user', function (req, res) {
		res.render('frontend/userCreate', { title: res.__('Create Account'), token: create.formToken(req), flash: req.flash() });
	});

	app.get('/login', function (req, res) {
		res.render('frontend/login', { title: res.__('Sign In'), token: create.formToken(req), flash: req.flash() });
	});
};