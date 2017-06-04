const session = require('express-session'),
	  flash   = require('connect-flash')

module.exports = function (app) {
	app.use(flash())
	app.use(session({ secret: 'meget hemmelig streng', resave: true, saveUninitialized: true }))
}