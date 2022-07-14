let data = {};

export default {
	setUser: function(user) {
		data.user = user;
	},
	getUser: function() {
		return data.user;
	},
	setTodos: function(todos) {
		data.todos = todos;
	},
	getTodos: function() {
		return data.todos;
	},
	getTodo: function(id) {
		return data.todos.find(todo => todo.id == id);
	},
	addTodo: function(todo) {
		data.todos.push(todo);
	},
	updateTodo: function(todo) {
		Object.assign(this.getTodo(todo.id), todo);
	},
	clear: function() {
		data = {};
	}
};
