const request = require('request')

module.exports = {
	/**
	 * Validate Google reCaptcha
	 * @param {string} captchaResponse - 'g-recaptcha-response'
	 * @returns boolean
	 */
	reCaptcha: function (captchaResponse) {
		var options = {
			url: 'https://www.google.com/recaptcha/api/siteverify',
			method: 'POST',
			headers: {
				'User-Agent': 'Super Agent/0.0.1',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			form: {
				'secret': '6Lch_woTAAAAACxhZyE8OphuQ1w4cYzBkk8aazVl',
				'response': captchaResponse
			}
		}
		request(options, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				if (JSON.parse(body).success) return true
				else return false
			}
			else return false
		})
		return false
	},

	/**
	 * Validate form token
	 * @param {object} token - Session.token
	 * @param {string} formToken - Token string provided by form
	 * @param {number} maxAge - default 300000 (5 minutes in milliseconds)
	 * @returns boolean
	 */
	formToken: function (token, formToken, maxAge) {
		maxAge = (typeof maxToken !== 'undefined' || typeof maxToken === 'Number') ? maxAge : 300000
		if (typeof token !== 'undefined' && token.hasOwnProperty('hash') && token.hasOwnProperty('age') && ((+ new Date() - token.age) < maxAge) && formToken === token.hash) return true
		else return false
	},

	/**
	 * Match 2 mixed variables
	 * @param {mixed} x
	 * @param {mixed} y
	 * @returns boolean
	 */
	inputMatch: function (x, y) {
		if (x === y) return true
		else return false
	},

	/**
	 * Validate email addresses
	 * @param {string} email
	 * @returns boolean
	*/
	email: function (email) {
		if (/^[A-Za-z0-9_\-]+([.][A-Za-z0-9_\-]+)*[@][A-Za-z0-9_\-]+([.][A-Za-z0-9_\-]+)+$/.test(email)) return true
		else return false
	}


}