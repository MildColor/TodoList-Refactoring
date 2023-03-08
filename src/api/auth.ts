import { SignInForm } from "../types/signIn";
import { SignUpForm } from "../types/signUp";
import { api } from "./axiosConfig";

export const authApis = {
  signUp: async ({ email, password }: SignUpForm) =>
    await api.post(`users/create`, { email, password }),

  // 로그인
  signIn: async ({ email, password }: SignInForm) =>
    await api.post(`users/login`, { email, password }),
};
