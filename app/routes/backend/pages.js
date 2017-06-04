const Pages = require('../../controllers/page');

module.exports = function (app) {
	app.get('/admin/pages', function (req, res) {
		let pages = new Pages();
		pages.retrieveList(function (result) {
			res.render('backend/pageList.pug', { title: res.__('Pages'), tagline: '', pages: result });
		});
	});

	app.get('/admin/page/:id', function (req, res) {
		let pages = new Pages();
		pages.retrieveOne(req.params.id, function (result) {
			res.render('backend/pageEdit.pug', { title: res.__('Edit Page'), tagline: '', page: result });
		});
	});
};