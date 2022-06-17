import { ITodoApi } from '../src';
import { TodoReadDto } from '../src/dto';
import { Api } from './api';

class TodoApi extends Api implements ITodoApi {
  getTodos(): Promise<Array<TodoReadDto>> {
    return Promise.resolve([
      { id: 1, date: '2020-01-10T00:00:00.000Z', description: 'test todo' },
    ]);
  }
}

export const todoApi = new TodoApi();
