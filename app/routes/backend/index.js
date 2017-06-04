module.exports = function (app) {
	require('./root')(app)
	require('./pages')(app)
}