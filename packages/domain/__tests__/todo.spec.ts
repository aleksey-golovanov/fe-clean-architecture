import { Todo } from '../src/entities';
import { ValidationException } from '../src/exceptions';

describe('Todo entity', () => {
  const now = new Date(2020, 1, 10);
  jest.useFakeTimers().setSystemTime(now);

  test('Creating new todo', () => {
    const id = 1;
    const date = new Date(2020, 1, 10);
    const description = 'test todo';
    const todo = new Todo(id, date, description);

    expect(todo.id).toEqual(id);
    expect(todo.date).toEqual(date);
    expect(todo.description).toEqual(description);
  });

  test('Creating new todo with invalid date', () => {
    expect(() => new Todo(1, new Date(2020, 1, 9), 'test todo')).toThrow(
      ValidationException,
    );
  });

  test('Changing description', () => {
    const id = 1;
    const date = new Date(2020, 1, 10);
    const description = 'test todo';
    const todo = new Todo(id, date, description);

    const newDescription = 'changed description';
    todo.description = newDescription;

    expect(todo.description).toEqual(newDescription);
  });
});
