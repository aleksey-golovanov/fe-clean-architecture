import { IStore, ITodoStore, TYPES } from "@fe-clean-architecture/application";
import { inject, injectable } from "inversify";
import { runInAction } from "mobx";

@injectable()
export class Store implements IStore {
  public todo: ITodoStore;

  constructor(@inject(TYPES.ITodoStore) todoStore: ITodoStore) {
    this.todo = todoStore;
  }

  public runTransaction(fn: () => void) {
    runInAction(fn);
  }
}
