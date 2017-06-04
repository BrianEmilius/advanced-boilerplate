const mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	users = new Schema({
		email: { type: String, unique: true },
		username: { type: String, unique: true },
		password: { type: String },
		userRole: { type: ObjectId, ref: 'userRoles' },
		createdAt: { type: Date },
		revisedAt: { type: Date, default: Date.now }
	})
	.index({
		email: 'text',
		username: 'text'
	});

module.exports = mongoose.model('users', users);