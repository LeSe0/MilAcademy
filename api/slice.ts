import axios, { AxiosError, Method } from "axios";
import { RequestOptions, ResponseModel } from "types/common";

const HOST = process.env.HOST!;

export default class ApiSlice {
  static baseURL: string = HOST;
  static defaultAuth = false;

  static redirectToLogin: (() => void) | null = null;

  static async request<T = any>(
    url: string,
    method: Method = "GET",
    payload: Record<string, any> | null = null,
    options: RequestOptions = null
  ): Promise<ResponseModel<T>> {
    let headers: { Authorization?: string } = {};

    if (this.defaultAuth || options?.auth) {
      headers.Authorization = "Bearer " + (localStorage.getItem("accessToken") || ""); // for most of requests;
    }

    if (options) {
      if (options.headers) {
        headers = { ...headers, ...options.headers };
      }
    }

    try {
      const rsp = (
        (await axios({
          method,
          url: (options?.useBaseUrl ? "" : this.baseURL) + url,
          headers,
          data: payload || {}
        })) || {}
      ).data;
      return rsp;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.status === 401) {
        localStorage.removeItem("accessToken");
        if (this.redirectToLogin) {
          this.redirectToLogin();
        }
      }

      return err.response?.data as ResponseModel;
    }
  }
}
