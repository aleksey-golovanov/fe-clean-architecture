import "reflect-metadata";
import { Todo } from "@fe-clean-architecture/domain";
import { GetTodoListQueryHandler } from "../../src";
import { store } from "../../__mocks__";

describe("Get todo list query", () => {
  test("Returns correct data", () => {
    const now = new Date(2020, 0, 1);
    jest.useFakeTimers().setSystemTime(now);

    store.todo.todos.set(
      1,
      new Todo(1, new Date("2020-01-10T00:00:00.000Z"), "test todo")
    );

    const handler = new GetTodoListQueryHandler(store);

    const res = handler.handle();

    expect(res).toEqual([
      { date: "2020-01-10T00:00:00.000Z", description: "test todo", id: 1 },
    ]);
  });
});
