import router from '../router.js';
import service from '../service.js';
import store from '../store.js';
import status from '../status.js';
import util from '../utils.js';

// Data
let user;

// Template
const template = `
	<div>
		<h1>Login</h1>
		<form id="user">
			<label>Username*</label>
			<input data-field="name" required>
			<label>Password*</label>
			<input data-field="password" type="password" required>
			<button id="login" type="submit" class="primary">Login</button>
			<button id="register" type="submit" class="secondary">Register</button>
		</form>
	</div>
`;

// Component
export default {
	title: 'Login',
	render: function(params) {
		let $view = $(template);
		user = {};
		util.bind(user, $view);
		$('#login', $view).click(event => login(event, params, $view));
		$('#register', $view).click(event => register(event, $view));
		return $view;
	}
}

// Action
function login(event, params, $view) {
	event.preventDefault();
	if (!$('#user', $view)[0].reportValidity()) return;
	service.getTodos(user)
		.then(todos => {
			store.setUser(user);
			store.setTodos(todos);
			$('nav').html(`User ${user.name} | <a href="#/logout">Logout</a>`);
			if (params.path)
				router.navigate(params.path);
			else router.navigate('/todoList');
		})
		.catch(xhr => {
			if (xhr.status === 401)
				status.error('Invalid username or password');
			else status.error(`Unexpected error (${xhr.status})`);
		});
}

// Action
function register(event, $view) {
	event.preventDefault();
	if (!$('#user', $view)[0].reportValidity()) return;
	service.postUser(user)
		.then(() => {
			store.setUser(user);
			store.setTodos([]);
			$('nav').html(`User ${user.name} | <a href="#/logout">Logout</a>`);
			router.navigate('/todoList');
		})
		.catch(xhr => {
			if (xhr.status === 409)
				status.error('User already exists');
			else status.error(`Unexpected error (${xhr.status})`);
		});
}
