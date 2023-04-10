import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authApis } from "../../../api/auth";
import { PAGE_PATH } from "../../../constants/path";
import { SignInForm } from "../../../types/signIn";
import { setLocalStorage } from "../../../utils/localStorage";
import { onErrorType } from "../../../types/custom";
import { ACCESS_TOKEN_KEY } from "../../../constants/token";

export const useSignInMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (payload: SignInForm) => {
      return await authApis.signIn(payload);
    },
    onSuccess: (data, variables, context) => {
      const { token } = data.data;
      setLocalStorage(ACCESS_TOKEN_KEY, token);
      navigate(PAGE_PATH.HOME);
    },
    onError: (error: onErrorType) => {
      const { status } = error.response;
      if (status === 400) return alert("로그인에 실패했습니다.");
    },
  });
};
