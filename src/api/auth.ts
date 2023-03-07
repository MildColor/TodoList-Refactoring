import { SignInForm } from "../types/signIn";
import { SignUpForm } from "../types/signUp";
import { api } from "./axiosConfig";

export const authApis = {
  signUp: async (payload: SignUpForm) =>
    await api.post(`users/create`, payload),

  // 로그인
  signIn: async (payload: SignInForm) => await api.post(`users/login`, payload),
};
