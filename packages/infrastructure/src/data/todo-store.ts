import { ITodoStore } from "@fe-clean-architecture/application";
import { Todo } from "@fe-clean-architecture/domain";
import { injectable } from "inversify";
import { makeAutoObservable } from "mobx";

@injectable()
export class TodoStore implements ITodoStore {
  public todos: Map<number, Todo>;

  constructor() {
    this.todos = new Map();
    makeAutoObservable(this);
  }

  public addTodo(todo: Todo): void {
    this.todos.set(todo.id, makeAutoObservable(todo));
  }
}
