module.exports = function (app) {
	app.get('/dash', function (req, res) {
		res.render('backend/dashboard', { title: 'Dash', tagline: res.__('Do something awesome!') });
	});
};