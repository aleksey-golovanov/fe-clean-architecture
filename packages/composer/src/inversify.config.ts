import 'reflect-metadata';
import {
  GetTodoListQueryHandler,
  LoadTodosCommandHandler,
  TYPES,
  IApi,
  IStore,
  ITodoApi,
  ITodoStore,
  IConfig,
  TodoListView,
} from '@fe-clean-architecture/application';
import {
  Api,
  Store,
  TodoApi,
  TodoStore,
} from '@fe-clean-architecture/infrastructure';
import { Container, interfaces } from 'inversify';

export type App = {
  commands: {
    loadTodos: () => Promise<void>;
  };
  queries: {
    getTodos: () => Array<TodoListView>;
  };
};

export const build = (config: IConfig): App => {
  const container = new Container();

  // bundings

  container.bind<IStore>(TYPES.IStore).to(Store).inSingletonScope();
  container.bind<IApi>(TYPES.IApi).to(Api).inSingletonScope();
  container.bind<ITodoStore>(TYPES.ITodoStore).to(TodoStore).inSingletonScope();
  container.bind<ITodoApi>(TYPES.ITodoApi).to(TodoApi).inSingletonScope();

  container
    .bind<interfaces.Factory<ITodoApi>>('Factory<ITodoApi>')
    .toFactory<TodoApi>(() => () => new TodoApi(config));

  container.bind<LoadTodosCommandHandler>(LoadTodosCommandHandler).toSelf();
  container.bind<GetTodoListQueryHandler>(GetTodoListQueryHandler).toSelf();

  // commands

  const loadTodosCommandHandler = container.get<LoadTodosCommandHandler>(
    LoadTodosCommandHandler,
  );
  const loadTodos = loadTodosCommandHandler.handle.bind(
    loadTodosCommandHandler,
  );

  // queries

  const getTodoListQueryHandler = container.get<GetTodoListQueryHandler>(
    GetTodoListQueryHandler,
  );
  const getTodos = getTodoListQueryHandler.handle.bind(getTodoListQueryHandler);

  return {
    commands: { loadTodos },
    queries: { getTodos },
  };
};
