import router from './router.js';

import loginComp from './components/login.js';
import todoListComp from './components/todoList.js';
import newTodoComp from './components/newTodo.js';
import editTodoComp from './components/editTodo.js';
import logoutComp from './components/logout.js';

router.register('/login', loginComp);
router.register('/todoList', todoListComp);
router.register('/newTodo', newTodoComp);
router.register('/editTodo', editTodoComp);
router.register('/logout', logoutComp);

let path = location.hash.replace('#', '');
if (path && path !== '/login')
	router.navigate('/login?path=' + path);
else router.navigate('/login');
