// import { AxiosRequestConfig } from "axios";
// import { getLocalStorage } from "./localStorage";
// import { ACCESS_TOKEN_KEY } from "../constants/token";

// // interface AxiosRequestConfigWithAuthorization extends AxiosRequestConfig {
// //   headers?: {
// //     Authorization?: string;
// //   };
// // }

// function setAuthTokenIfNull(config: AxiosRequestConfig) {
//   //   if (!config.headers) {
//   //     return config;
//   //   }
//   //   const bearerToken = `Bearer ${getLocalStorage(ACCESS_TOKEN_KEY)}`;
//   //   config.headers.Authorization ??= bearerToken;

//   const accessToken = getLocalStorage(ACCESS_TOKEN_KEY);
//   if (!accessToken) return config;

//   config.headers = { Authorization: accessToken };
//   return config;
// }

// export default setAuthTokenIfNull;

export {};
