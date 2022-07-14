import router from '../router.js';
import store from '../store.js';
import status from '../status.js';

// Template
const template = `
	<div>
		<h1>Todo List</h1>
		<ul id="todoList"></ul>
		<a href="#/newTodo">New Todo</a>
	</div>
`;

// Component
export default {
	title: 'Todo List',
	render: function() {
		let $view = $(template);
		let todos = store.getTodos();
		renderTodos(todos, $view);
		$('#newTodo', $view).click(event => router.navigate('/newTodo'));
		return $view;
	}
}

// Rendering
function renderTodos(todos, $view) {
	let $todoList = $('#todoList', $view).empty();
	if (todos.length === 0)
		status.info('No todos available');
	else todos.forEach(todo => $todoList.append(renderTodo(todo)));
}

// Rendering
function renderTodo(todo) {
	return $('<li>').addClass('todo').html(`
		<b>${todo.title}</b><br>
		Category: ${todo.category || ''}<br>
		Due Date: ${todo.dueDate || ''}
		<a href="#/editTodo/${todo.id}" class="right">Edit</a>
	`);
}
