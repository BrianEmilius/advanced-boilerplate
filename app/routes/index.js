/**
 * Requires all active route modules
 * @param {object} app express-app
 */
module.exports = function (app) {
	require('./backend/index')(app);
	require('./api/index')(app);
	require('./frontend/index')(app); // must be last
}