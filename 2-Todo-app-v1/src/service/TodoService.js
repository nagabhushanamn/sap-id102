
import Todo from '../model/Todo';
import { ALL } from '../constants';

export default class TodoService {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        let newTodo = new Todo(title);
        this.todos = [...this.todos, newTodo];
    }
    viewTodos(status) {
        if (status === ALL) {
            this.todos.forEach(todo => console.log(todo));
        }
    }
}