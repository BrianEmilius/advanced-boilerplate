const Pages = require('../../controllers/page');

module.exports = function (app) {
	app.get('/', function (req, res) {
		let page = new Pages();
		page.retrieveOne('hello-world', function (result) {
			res.render('frontend/page', result);
		});
	});
};