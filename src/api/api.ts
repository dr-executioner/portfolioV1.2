import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { config } from "../config/config";

const apiClient = axios.create({
  baseURL: config.baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const requestHandler = async <T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  data: unknown = null,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        `Request failed with status ${error.response.status}: ${
          error.response.data.message || "Unknown error"
        }`
      );
    } else if (error.request) {
      throw new Error(
        "No response received from server. Please check your network connection."
      );
    } else {
      throw new Error(`Request error: ${error.message}`);
    }
  }
};

export const api = {
  get: <T>(url: string, config: AxiosRequestConfig = {}) =>
    requestHandler<T>("get", url, null, config),
  post: <T>(url: string, data: unknown, config: AxiosRequestConfig = {}) =>
    requestHandler<T>("post", url, data, config),
  put: <T>(url: string, data: unknown, config: AxiosRequestConfig = {}) =>
    requestHandler<T>("put", url, data, config),
  delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
    requestHandler<T>("delete", url, null, config),
};
