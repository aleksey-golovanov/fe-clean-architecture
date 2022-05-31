import { GetTodoListQueryHandler } from "@fe-clean-architecture/application";
import { container } from "./inversify.config";

const getTodoListQueryHandler = container.get<GetTodoListQueryHandler>(
  GetTodoListQueryHandler
);
export const getTodos = getTodoListQueryHandler.handle.bind(
  getTodoListQueryHandler
);
