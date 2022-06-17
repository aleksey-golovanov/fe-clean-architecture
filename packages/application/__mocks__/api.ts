import { IApi } from '../src';

export class Api implements IApi {
  login() {
    return Promise.resolve();
  }

  logout() {
    return Promise.resolve();
  }

  get() {
    return Promise.resolve();
  }

  post() {
    return Promise.resolve();
  }

  put() {
    return Promise.resolve();
  }
}
