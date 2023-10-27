import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpRequests } from './httpRequests';

export class AxiosAdapter implements HttpRequests {
  public axios: AxiosInstance;

  constructor(readonly baseURL: string) {
    this.axios = axios.create({ baseURL });
    this.axios.interceptors.request.use(
      response => response,
      error => {
        if (error instanceof AxiosError) {
          throw new Error(error.response?.data.message);
        }
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axios(url, {
      method: 'GET',
      ...config,
    });

    return response.data;
  }

  async post<T, R>(
    url: string,
    body: R,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axios(url, {
      method: 'POST',
      data: body,
      ...config,
    });

    return response.data;
  }

  async patch<T, R>(
    url: string,
    body: R,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axios(url, {
      method: 'PATCH',
      data: body,
      ...config,
    });

    return response.data;
  }

  async delete<T>(url: string, config?: any): Promise<T> {
    const response = await this.axios(url, {
      method: 'DELETE',
      ...config,
    });

    return response.data;
  }
}
