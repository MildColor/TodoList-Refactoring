import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authApis } from "../../../api/auth";
import { PAGE_PATH } from "../../../constants/path";
import { SignUpForm } from "../../../types/signUp";
import { setLocalStorage } from "../../../utils/localStorage";
import { onErrorType } from "../../../types/custom";
import { TODO_ALERTS } from "../../../constants/alerts";

export const useSignUpMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (payload: SignUpForm) => {
      return await authApis.signUp(payload);
    },

    onSuccess: (data, variables, context) => {
      const { token } = data.data;
      setLocalStorage("accessToken", token);
      navigate(PAGE_PATH.HOME);
    },

    onError: (error: onErrorType) => {
      const { status } = error.response;
      if (status === 409) {
        alert(TODO_ALERTS.EXIST_USER);
        navigate(PAGE_PATH.SIGN_IN);
      }
    },
  });
};
