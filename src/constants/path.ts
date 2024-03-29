export const PAGE_PATH = {
  HOME: "/",
  SIGN_IN: "/auth/signin",
  SIGN_UP: "/auth/signup",
  TODO_DETAIL: (id: string) => `/todo/${id}`,
  NOT_FOUND: "*",
};
