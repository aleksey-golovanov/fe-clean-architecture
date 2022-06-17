import { Todo } from '@fe-clean-architecture/domain';
import { ITodoStore } from '../src';

class TodoStore implements ITodoStore {
  public todos: Map<number, Todo>;

  constructor() {
    this.todos = new Map();
  }

  public addTodo(todo: Todo): void {
    this.todos.set(todo.id, todo);
  }
}

export const todoStore = new TodoStore();
