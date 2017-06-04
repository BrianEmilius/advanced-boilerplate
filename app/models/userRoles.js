const mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	userRoles = new Schema({
		name: { type: String, unique: true },
		level: { type: Integer, unique: true }
	})
	.index({
		email: 'text',
		username: 'text'
	})

module.exports = mongoose.model('userRoles', userRoles)