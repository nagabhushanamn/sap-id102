console.log('-index.js-');
import 'bootstrap/dist/css/bootstrap.css';

import TodoService from './service/TodoService';

let service = new TodoService();

//-----------------------------------------------------
// using DOM Api
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {
    service.addTodo('task');
});

let viewAllBtn = document.getElementById('viewAllBtn');
viewAllBtn.addEventListener('click', (e) => {
    service.viewTodos('all');
});
//-----------------------------------------------------

console.log('its me');