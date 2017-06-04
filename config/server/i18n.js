const i18n = require('i18n');

module.exports = function (app) {
	i18n.configure({
		directory      : __dirname + '/../../app/locales',
		autoReload     : true,
		syncFiles      : true,
		updateFiles    : true,
		queryParameter : 'lang'
	});

	app.use(i18n.init);
};