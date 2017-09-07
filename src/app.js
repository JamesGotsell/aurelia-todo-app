import {Todo} from './todo';

export class App {
  constructor() {
    this.message = 'Hello World.......this is todo APP with Aurelia!';
    this.heading = 'todos';
    this.todos = [];
    this.todoDescription = '';

  }
  addTodo(){
    if(this.todoDescription){
      this.todos.push(new Todo(this.todoDescription));
      this.todoDescription = '';
    }
  }
  removeTodo (todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1 ){
      this.todos.splice(index, 1);
    }
  }
}
