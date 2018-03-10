var ApiBuilder = require('claudia-api-builder'),
	api = new ApiBuilder();
module.exports = api;

// just return the result value for synchronous processing
api.get('/hello', function () {
	'use strict';
	return 'hello world';
});

// pass some arguments using the query string or headers to this
// method and see that they're all in the request object
api.get('/echo', function (request) {
	'use strict';
	return request;
});


// use .post to handle a post; or .delete, .patch, .head, .put
api.post('/echo', function (request) {
	'use strict';
	return request;
});