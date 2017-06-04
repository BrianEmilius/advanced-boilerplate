module.exports = function (app) {
	app.get('/admin', function (req, res) {
		res.render('backend/dashboard', { title: 'Dash', tagline: res.__('Do something awesome!') });
	});
};