export interface IApi {
  login(): Promise<void>;
  logout(): Promise<void>;

  get(url: string): Promise<unknown>;
  post(url: string, data: unknown): Promise<unknown>;
  put(url: string, data: unknown): Promise<unknown>;
}
