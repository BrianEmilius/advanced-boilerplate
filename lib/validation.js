const request = require('request');

/**
 * Represents a collection of methods for validation
 * @class
 */
function Validate() {}

/**
 * Validate Google reCaptcha
 * @param {string} captchaResponse - 'g-recaptcha-response'
 * @param {string} secret - your Google reCaptcha secret string
 * @returns boolean
 */
Validate.prototype.reCaptcha = function(captchaResponse, secret) {
	let options = {
		url: 'https://www.google.com/recaptcha/api/siteverify',
		method: 'POST',
		headers: {
			'User-Agent': 'Super Agent/0.0.1',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		form: {
			'secret': secret,
			'response': captchaResponse
		}
	};
	request(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			if (JSON.parse(body).success)
				return true;
			else
				return false;
		}
		else
			return false;
	});
	return false;
}

/**
 * Validate form token
 * @param {object} token - Session.token
 * @param {string} formToken - Token string provided by form
 * @param {number} maxAge - default 300000 (5 minutes in milliseconds)
 * @returns boolean
 */
Validate.prototype.formToken = function (token, formToken, maxAge) {
	maxAge = (typeof maxToken !== 'undefined' || typeof maxToken === 'Number') ? maxAge : 300000
	if (typeof token !== 'undefined'
		&& token.hasOwnProperty('hash')
		&& token.hasOwnProperty('age')
		&& ((+ new Date() - token.age) < maxAge)
		&& formToken === token.hash)
		return true;
	else
		return false;
}

/**
 * Match 2 mixed variables
 * @param {mixed} x
 * @param {mixed} y
 * @returns boolean
 */
Validate.prototype.inputMatch = function (x, y) {
	if (x === y)
		return true;
	else
		return false;
}

/**
 * Validate email addresses
 * @param {string} email
 * @returns boolean
*/
Validate.prototype.email = function (email) {
	if (/^[A-Za-z0-9_\-]+([.][A-Za-z0-9_\-]+)*[@][A-Za-z0-9_\-]+([.][A-Za-z0-9_\-]+)+$/.test(email))
		return true;
	else
		return false;
}

module.exports = Validate;