import { TodoReadDto } from "../../dto";
import { IApi } from "./api";

export interface ITodoApi extends IApi {
  getTodos(): Promise<Array<TodoReadDto>>;
}
