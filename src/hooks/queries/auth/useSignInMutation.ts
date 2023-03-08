import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authApis } from "../../../api/auth";
import { PAGE_PATH } from "../../../constants/path";
import { SignInForm } from "../../../types/signIn";
import { setLocalStorage } from "../../../utils/localStorage";

export const useSignInMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (payload: SignInForm) => {
      return await authApis.signIn(payload);
    },
    onSuccess: (data, variables, context) => {
      const { token, message } = data.data;
      setLocalStorage("accessToken", token);
      navigate(PAGE_PATH.HOME);
    },
    onError: () => {},
  });
};
