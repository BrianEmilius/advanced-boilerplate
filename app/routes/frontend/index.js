module.exports = function (app) {
	require('./static')(app)
	require('./root')(app)
	require('./user')(app)
	require('./wildcard')(app) // must be last!
}