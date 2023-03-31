import React, { useState } from "react";

const useError = <T extends object>(
  initialState: T
): [T, <P extends keyof T>(key: P, value: string) => void] => {
  const [errors, setErrors] = useState<T>(initialState);

  const setErrorMessage = <P extends keyof T>(key: P, value: string) => {
    setErrors((prev) => ({ ...prev, [key]: value }));
  };

  return [errors, setErrorMessage];
};

export default useError;
