import { useState, useEffect } from "react";
import { ACCESS_TOKEN_KEY } from "../../constants/token";
import { getLocalStorage } from "../../utils/localStorage";

const useTokenCheck = () => {
  const [isAuthority, setIsAuthority] = useState(true);

  useEffect(() => {
    getLocalStorage(ACCESS_TOKEN_KEY) === null
      ? setIsAuthority(false)
      : setIsAuthority(true);
  }, []);

  return { isAuthority };
};

export default useTokenCheck;
