import { Todo } from "@fe-clean-architecture/domain";
import { IStore } from "./store";

export interface ITodoStore {
  todos: Map<number, Todo>;
  addTodo(todo: Todo): void;
}
