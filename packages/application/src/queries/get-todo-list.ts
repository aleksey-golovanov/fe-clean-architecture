import { inject, injectable } from "inversify";
import { TYPES } from "../di/types";
import { IStore } from "../interfaces";
import { TodoListView } from "../views";

@injectable()
export class GetTodoListQueryHandler {
  private _store: IStore;

  constructor(@inject(TYPES.IStore) store: IStore) {
    this._store = store;
  }

  public handle(): Array<TodoListView> {
    return [...this._store.todo.todos.values()].map((todo) => ({
      id: todo.id,
      date: todo.date.toISOString(),
      description: todo.description,
    }));
  }
}
