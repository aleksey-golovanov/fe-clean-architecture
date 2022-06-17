import { Todo } from '@fe-clean-architecture/domain';

export interface ITodoStore {
  todos: Map<number, Todo>;
  addTodo(todo: Todo): void;
}
