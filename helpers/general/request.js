/* eslint-disable no-console */

// Options for getting all content items in a Kentico Cloud project 
function getAPIKeyProjectIDOptions(req) {
	return {
		method: 'GET',
		uri: 'https://manage.kenticocloud.com/projects/' + req.params.projectId + '/items',
		auth: {
			'bearer': (typeof req.token !== 'undefined') ? req.token : ''
		},
		json: true
	};
}

// Options for getting all content models in a Kentico Cloud project
function getContentModelsOptions(req) {
	return {
		method: 'GET',
		uri: 'https://deliver.kenticocloud.com/' + req.params.projectId + '/types',
		json: true
	};
}

// Options for getting adding a content item in a Kentico Cloud project 
function getAddOptions(req, data) {
	return {
		method: 'POST',
		uri: 'https://manage.kenticocloud.com/projects/' + req.params.projectId + '/items',
		auth: {
			'bearer': (typeof req.token !== 'undefined') ? req.token : ''
		},
		body: data,
		json: true
	};
}

// Options for getting adding a language variant to a content item in a Kentico Cloud project
function getUpsertOptions(req, data, itemId, languageVariant) {
	return {
		method: 'PUT',
		uri: 'https://manage.kenticocloud.com/projects/' + req.params.projectId + '/items/' + itemId + '/variants/codename/' + languageVariant,
		auth: {
			'bearer': (typeof req.token !== 'undefined') ? req.token : ''
		},
		body: data,
		json: true
	};
}

// Options for deleting a content item from a Kentico Cloud project 
function getDeleteOptions(req, itemId) {
	return {
		method: 'DELETE',
		uri: 'https://manage.kenticocloud.com/projects/' + req.params.projectId + '/items/' + itemId,
		auth: {
			'bearer': (typeof req.token !== 'undefined') ? req.token : ''
		},
		json: true
	};
}

module.exports = {
	getAPIKeyProjectIDOptions,
	getContentModelsOptions,
	getAddOptions,
	getUpsertOptions,
	getDeleteOptions
};