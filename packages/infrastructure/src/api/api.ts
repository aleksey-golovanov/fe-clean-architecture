import { IApi, IConfig } from "@fe-clean-architecture/application";
import { injectable } from "inversify";

@injectable()
export class Api implements IApi {
  private _config?: IConfig;

  constructor(config: IConfig) {
    this._config = config;
  }

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
