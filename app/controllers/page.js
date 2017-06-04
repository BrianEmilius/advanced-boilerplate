/**
 * Describes methods to create, retrieve, update, and delete pages
 * @returns void
 */
function Pages() {
	this.pages = require('../models/pages')
	this.users = require('../models/users')
	require('mongoose').connect(require('../../config/database/mongodb').url)
}

/**
 * Retrieve a page by permalink or id
 * @param {string} pageQuery - id or permalink
 * @param {Pages~getOneCallback} cFunction - callback function that handles the result
 */
Pages.prototype.retrieveOne = function(pageQuery, cFunction) {
	let ObjectId = require('mongoose').Types.ObjectId,
		pageQueryOId

	try {
		pageQueryOId = new ObjectId(pageQuery)
	}
	catch (error) {
		//console.error(error)
	}

	let filter = (pageQueryOId) ? { '_id': pageQueryOId } : { 'permalink': pageQuery }

	this.pages.findOne(filter)
	.populate('author', 'email')
	.select('title permalink body author')
	.exec(function(error, result) {
		if (error) return console.error(error)
		cFunction(result)
	})
}

/**
 * Retrieve a list of all pages
 * @param {Pages~getListCallback} cFunction - callback function that handles the result
 */
Pages.prototype.retrieveList = function(cFunction) {
	this.pages.find({})
	.select('title permalink')
	.exec(function(error, result) {
		if (error) return console.error(error)
		cFunction(result)
	})
}
module.exports = Pages