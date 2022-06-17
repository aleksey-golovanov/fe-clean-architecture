import 'reflect-metadata';
import { Todo } from '@fe-clean-architecture/domain';
import { LoadTodosCommandHandler } from '../../src';
import { store, todoApi } from '../../__mocks__';

describe('Load todos command', () => {
  test('Loads todos correctly', async () => {
    const now = new Date(2020, 0, 1);
    jest.useFakeTimers().setSystemTime(now);
    const handler = new LoadTodosCommandHandler(store, todoApi);

    await handler.handle();

    expect(store.todo.todos).toEqual(
      new Map([
        [1, new Todo(1, new Date('2020-01-10T00:00:00.000Z'), 'test todo')],
      ]),
    );
  });
});
