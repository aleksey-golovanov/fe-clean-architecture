import { Todo } from '@fe-clean-architecture/domain';
import { inject, injectable } from 'inversify';
import { TYPES } from '../di/types';
import { IStore, ITodoApi } from '../interfaces';

@injectable()
export class LoadTodosCommandHandler {
  private _store: IStore;

  private _todoApi: ITodoApi;

  constructor(
    @inject(TYPES.IStore) store: IStore,
    @inject('Factory<ITodoApi>') apiFactory: () => ITodoApi,
  ) {
    this._store = store;
    this._todoApi = apiFactory();
  }

  public initialize(api: ITodoApi) {
    this._todoApi = api;
  }

  public async handle() {
    const todos = await this._todoApi.getTodos();

    this._store.runTransaction(() =>
      todos.forEach(todo => {
        this._store.todo.addTodo(
          new Todo(todo.id, new Date(todo.date), todo.description),
        );
      }),
    );
  }
}
