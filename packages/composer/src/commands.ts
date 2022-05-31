import { LoadTodosCommandHandler } from "@fe-clean-architecture/application";
import { container } from "./inversify.config";

const loadTodosCommandHandler = container.get<LoadTodosCommandHandler>(
  LoadTodosCommandHandler
);
export const loadTodos = loadTodosCommandHandler.handle.bind(
  loadTodosCommandHandler
);
