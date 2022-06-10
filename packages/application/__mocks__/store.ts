import { IStore, ITodoStore } from "../src";
import { todoStore } from "./todo-store";

class Store implements IStore {
  public todo: ITodoStore;

  constructor(todo: ITodoStore) {
    this.todo = todo;
  }

  public runTransaction(fn: () => void) {
    fn();
  }
}

export const store = new Store(todoStore);
