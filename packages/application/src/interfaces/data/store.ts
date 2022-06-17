import { ITodoStore } from './todo-store';

export interface IStore {
  todo: ITodoStore;

  runTransaction(fn: () => void): void;
}
