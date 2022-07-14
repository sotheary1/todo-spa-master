import store from '../store.js';

// Template
const template = `
	<div>
		<h1>Logout</h1>
		<p>You have successfully logged out</p>
	</div>
`;

// Component
export default {
	title: 'Logout',
	render: function() {
		store.clear();
		$('nav').html(`<a href="#/login">Login</a>`);
		return $(template);
	}
}
