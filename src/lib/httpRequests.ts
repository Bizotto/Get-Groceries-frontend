export interface HttpRequests {
  get<T>(url: string, options?: any): Promise<T>;
  post<T, R>(url: string, body: R, options?: any): Promise<T>;
  patch<T, R>(url: string, body: R, options?: any): Promise<T>;
  delete<T>(url: string, options?: any): Promise<T>;
}
