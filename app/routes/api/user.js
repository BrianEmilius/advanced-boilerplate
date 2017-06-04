const bcrypt = require('bcrypt'),
	  validate = require('../../../lib/validation'),
	  users = require('../../models/users'),
	  Users = require('../../controllers/user')

module.exports = function (app) {
	app.post('/api/user', function (req, res) {
		var user = new Users()
		user.create(req, res, function (status) {
			if (!status) res.redirect('/user')
			else res.redirect('/')
		})
	})
}