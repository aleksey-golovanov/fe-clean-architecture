import { ITodoApi, TodoReadDto } from '@fe-clean-architecture/application';
import { Api } from './api';

export class TodoApi extends Api implements ITodoApi {
  getTodos(): Promise<Array<TodoReadDto>> {
    return Promise.resolve([
      { id: 1, date: '2030-05-31T00:33:14.423Z', description: 'test 1' },
    ]);
  }
}
