import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface RequestConfig extends AxiosRequestConfig {}
export interface Response<T = unknown> extends AxiosResponse<T> {
    [x: string]: any;
}

export class Request {
  constructor(private request = axios) { }

  public get<T>(url: string, config: RequestConfig = {}): Promise<Response<T>> {
    return this.request.get<T, Response<T>>(url, config);
  }

  public post<T>(url: string, body: Object, config: RequestConfig = {}): Promise<Response<T>> {
    return axios.post(url, body, config);
  }

  public put<T>(url: string, body: Object, config: RequestConfig = {}): Promise<Response<T>> {
    return axios.put(url, body, config);
  }

  public delete<T>(url: string, config: RequestConfig = {}): Promise<Response<T>> {
    return axios.delete(url, config);
  }

  public static isRequestError(error: AxiosError): boolean {
    return !!(error.response && error.response.status);
  }
}
