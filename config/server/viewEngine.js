const template = require('pug'),
	  cache    = require('lru-cache'),
	  path     = require('path');

module.exports = function (app) {
	app.set('view engine', 'pug');
	app.set('views', path.join(__dirname, '../../app/views'));
	template.cache = cache(100);
};