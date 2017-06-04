/**
 * Collection of exported modules for server configuration
 * @param {object} app express-app
 */
module.exports = function (app) {
	require('./logger')(app)
	require('./parser')(app)
	require('./session')(app)
	require('./i18n')(app)
	require('./viewEngine')(app)
}