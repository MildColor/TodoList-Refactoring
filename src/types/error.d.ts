import { SignInError } from "./signIn";

export interface onErrorType {
  response: {
    data: SignInError;
    status: number;
  };
}
