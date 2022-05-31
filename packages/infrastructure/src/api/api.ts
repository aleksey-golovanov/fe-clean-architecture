import { IApi } from "@fe-clean-architecture/application";
import { injectable } from "inversify";

@injectable()
export class Api implements IApi {
  login(): Promise<void> {
    return Promise.resolve();
  }
  logout(): Promise<void> {
    return Promise.resolve();
  }

  get(url: string): Promise<unknown> {
    return Promise.resolve();
  }
  post(url: string, data: unknown): Promise<unknown> {
    return Promise.resolve();
  }
  put(url: string, data: unknown): Promise<unknown> {
    return Promise.resolve();
  }
}
