module.exports = {
	/**
	 * Create form input named _once with session token and set the form token
	 * @param {object} req - express router request
	 * @returns {object}
	 */
	formToken: function (req) {
		var token = require('crypto').randomBytes(48)
		req.session.token = {
			hash: token.toString('hex'),
			age: + new Date()
		}

		return require('pug').render('input(type="hidden", name="_once", value="'+req.session.token.hash+'")')
	}
}