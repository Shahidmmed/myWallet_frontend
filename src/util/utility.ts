import axios, { AxiosResponse } from "axios";
import { app_local_storage_key } from "./constants";

export type IUser = {
  roles?: string[];
  username?: string;
};

export const getAxios = (baseURL: string = "") => {
  const instance = axios.create({ baseURL });
  var token = localStorage.get("u_token");
  if (token != null && token !== "") {
    instance.defaults.headers.common["Authorization"] = "Bearer " + token;
  }

  instance.interceptors.response.use(
    (response: AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        clearUserData();
        window.location.reload();
      }
      return Promise.reject(error);
    }
  );
  return instance;
};

export const localStorage = {
  get: (key: string) =>
    window.localStorage.getItem(app_local_storage_key + ":" + key),
  remove: (key: string) =>
    window.localStorage.removeItem(app_local_storage_key + ":" + key),
  set: (key: string, data: string) =>
    window.localStorage.setItem(app_local_storage_key + ":" + key, data),
};

export const getUserInfo = () => {
  try {
    var user = localStorage.get("u_user_info");
    if (user === "" || user === null) return undefined;
    return JSON.parse(user) as IUser;
  } catch (error) {
    return undefined;
  }
};

export const getUserRole = () => {
  try {
    var role = localStorage.get("u_role");
    if (role === "" || role === null) return undefined;
    return role;
  } catch (error) {
    return undefined;
  }
};

export const getUserSession = () => {
  try {
    var token = localStorage.get("u_token");
    if (token === "" || token === null) return undefined;
    return token;
  } catch (error) {
    return undefined;
  }
};

export const cacheUserSession = (token: string, expiry: string) => {
  localStorage.set("u_token", token);
  localStorage.set("u_token_expiry", expiry);
};

export const cacheSessionId = (sessionId: string) => {
  localStorage.set("u_sessionId", sessionId);
};

export const cacheUserRole = (role: string) => {
  localStorage.set("u_role", role);
};

export const cacheUserData = (userInfo: string) => {
  localStorage.set("u_user_info", userInfo);
};

export const clearUserData = () => {
  localStorage.remove("u_user_info");
  localStorage.remove("u_role");
  localStorage.remove("u_sessionId");
  localStorage.remove("u_token");
  localStorage.remove("u_token_expiry");
};

export const uuid = () => {
  return "xxxx-xxxx-xxx-xxxx".replace(/[x]/g, () => {
    const r = Math.floor(Math.random() * 16);

    return r.toString(16);
  });
};

export const dateTimeFormat = (date: string) => {
  const _dateFormat = new Date(date).toDateString();
  const _timeFormat = new Date(date).toLocaleTimeString();
  return `${_dateFormat}  ${_timeFormat}`;
};

export function preventNumberInput(e: {
  keyCode: any;
  which: any;
  preventDefault: () => void;
}) {
  var keyCode = e.keyCode ? e.keyCode : e.which;
  if ((keyCode > 47 && keyCode < 58) || (keyCode > 95 && keyCode < 107)) {
    e.preventDefault();
  }
}
