import router from '../router.js';
import service from '../service.js';
import store from '../store.js';
import status from '../status.js';
import utils from '../utils.js';

// Data
let todo;

// Template
const template = `
	<div>
		<h1>Edit Todo</h1>
		<form id="todo">
			<input data-field="id" type="hidden">
			<label>Title*</label>
			<input data-field="title" required>
			<label>Category</label>
			<input data-field="category">
			<label>Due Date</label>
			<input data-field="dueDate" type="date">
			<button id="save" type="submit" class="primary">Save</button>
			<button id="cancel" type="button" class="secondary">Cancel</button>
		</form>
	</div>
`;

// Component
export default {
	title: 'Edit Todo',
	render: function(params) {
		let $view = $(template);
		let id = params[0];
		if (!id) {
			status.error('Missing id parameter');
			return $view;
		}
		todo = store.getTodo(id);
		if (!todo) {
			status.error(`Todo with id ${id} not found`);
			return $view;
		}
		utils.bind(todo, $view);
		$('#save', $view).click(event => saveTodo(event, $view));
		$('#cancel', $view).click(event => router.navigate('/todoList'));
		return $view;
	}
}

// Action
function saveTodo(event, $view) {
	event.preventDefault();
	if (!$('#todo', $view)[0].reportValidity()) return;
	service.putTodo(store.getUser(), todo)
		.then(todo => {
			store.updateTodo(todo);
			router.navigate('/todoList');
		})
		.catch(xhr => status.error(`Unexpected error (${xhr.status})`));
}
