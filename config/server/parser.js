const bodyParser = require('body-parser');

module.exports = function (app) {
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json({ type: 'application/json', limit: '5mb' }));
	app.use(bodyParser.json({ type: 'application/vnd.api+json', limit: '5mb' }));
};