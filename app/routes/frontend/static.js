const server = require('express')

module.exports = function (app) {
	app.use(server.static(__dirname + '/../../public', { maxAge: 1000 * 60 * 60 }))
}