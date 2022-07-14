const BASE_URI = '/api';

export default {
	postUser: function(user) {
		let settings = {
			url: BASE_URI + '/users',
			type: 'POST',
			contentType: 'application/json',
			data: JSON.stringify(user)
		};
		console.log('Sending ' + settings.type + ' request to ' + settings.url);
		return $.ajax(settings);
	},

	getTodos: function(user) {
		let settings = {
			url: BASE_URI + '/todos',
			type: 'GET',
			dataType: 'json',
			headers: { Authorization: 'Basic ' + btoa(user.name + ':' + user.password) }
		};
		console.log('Sending ' + settings.type + ' request to ' + settings.url);
		return $.ajax(settings);
	},

	postTodo: function(user, todo) {
		let settings = {
			url: BASE_URI + '/todos',
			type: 'POST',
			dataType: 'json',
			contentType: 'application/json',
			headers: { Authorization: 'Basic ' + btoa(user.name + ':' + user.password) },
			data: JSON.stringify(todo)
		};
		console.log('Sending ' + settings.type + ' request to ' + settings.url);
		return $.ajax(settings);
	},

	getTodo: function(user, id) {
		let settings = {
			url: BASE_URI + '/todos/' + id,
			type: 'GET',
			dataType: 'json',
			headers: { Authorization: 'Basic ' + btoa(user.name + ':' + user.password) }
		};
		console.log('Sending ' + settings.type + ' request to ' + settings.url);
		return $.ajax(settings);
	},

	putTodo: function(user, todo) {
		let settings = {
			url: BASE_URI + '/todos/' + todo.id,
			type: 'PUT',
			dataType: 'json',
			contentType: 'application/json',
			headers: { Authorization: 'Basic ' + btoa(user.name + ':' + user.password) },
			data: JSON.stringify(todo)
		};
		console.log('Sending ' + settings.type + ' request to ' + settings.url);
		return $.ajax(settings);
	}
};
