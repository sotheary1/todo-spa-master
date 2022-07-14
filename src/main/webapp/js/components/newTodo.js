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
		<h1>New Todo</h1>
		<form id="todo">
			<label>Title*</label>
			<input data-field="title" required>
			<label>Category</label>
			<input data-field="category">
			<label>Due Date</label>
			<input data-field="dueDate" type="date">
			<button id="addTodo" type="submit" class="primary">Add Todo</button>
			<button id="cancel" type="button" class="secondary">Cancel</button>
		</form>
	</div>
`;

// Component
export default {
	title: 'New Todo',
	render: function() {
		let $view = $(template);
		todo = {};
		utils.bind(todo, $view);
		$('#addTodo', $view).click(event => addTodo(event, $view));
		$('#cancel', $view).click(event => router.navigate('/todoList'));
		return $view;
	}
}

// Action
function addTodo(event, $view) {
	event.preventDefault();
	if (!$('#todo', $view)[0].reportValidity()) return;
	service.postTodo(store.getUser(), todo)
		.then(todo => {
			store.addTodo(todo);
			router.navigate('/todoList');
		})
		.catch(xhr => status.error(`Unexpected error (${xhr.status})`));
}
