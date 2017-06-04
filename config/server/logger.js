const logger     = require('morgan'),
	  filesystem = require('fs'),
	  path       = require('path'),
	  accessLogStream = filesystem.createWriteStream(path.join('logs', 'access.log'), { flags: 'a' })

module.exports = function (app) {
	app.use(logger('combined', { stream: accessLogStream }))
}