import "reflect-metadata";
import {
  GetTodoListQueryHandler,
  LoadTodosCommandHandler,
  TYPES,
  IApi,
  IStore,
  ITodoApi,
  ITodoStore,
} from "@fe-clean-architecture/application";
import {
  Api,
  Store,
  TodoApi,
  TodoStore,
} from "@fe-clean-architecture/infrastructure";
import { Container } from "inversify";

const container = new Container();

container.bind<IStore>(TYPES.IStore).to(Store).inSingletonScope();
container.bind<IApi>(TYPES.IApi).to(Api).inSingletonScope();
container.bind<ITodoStore>(TYPES.ITodoStore).to(TodoStore).inSingletonScope();
container.bind<ITodoApi>(TYPES.ITodoApi).to(TodoApi).inSingletonScope();
container.bind<LoadTodosCommandHandler>(LoadTodosCommandHandler).toSelf();
container.bind<GetTodoListQueryHandler>(GetTodoListQueryHandler).toSelf();

export { container };
