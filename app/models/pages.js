const mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	pages = new Schema({
		title: { type: String },
		permalink: { type: String, unique: true },
		body: { type: String },
		author: { type: ObjectId, ref: 'users' },
		createdAt: { type: Date },
		revisedAt: { type: Date, default: Date.now }
	})
	.index({
		title: 'text',
		permalink: 'text',
		body: 'text'
	});

module.exports = mongoose.model('pages', pages);