import React, { ComponentType } from "react";
import { PAGE_PATH } from "../../constants/path";
import useTokenCheck from "../../hooks/auth/useTokenCheck";
import { TODO_ALERTS } from "../../constants/alerts";

function AuthHOC(AuthComponent: ComponentType) {
  const AuthCheck = () => {
    const { isAuthority } = useTokenCheck();
    if (!isAuthority) {
      // 추후 modal 사용
      window.alert(TODO_ALERTS.INVALID_TOKEN);
      // navigation은 router안에서만 사용가능
      window.location.href = PAGE_PATH.SIGN_IN;
      return <></>;
    }
    return <AuthComponent />;
  };
  return AuthCheck;
}

export default AuthHOC;
