const port = process.env.PORT || 1337;

module.exports = function (app) {
	app.listen(port);
	console.info('Service is available @ http://localhost:'+port);
};