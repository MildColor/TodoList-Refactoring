import React, { useState, Dispatch, SetStateAction } from "react";

const useForm = <T extends object = object>(
  initialState: T
): [
  T,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>
] => {
  const [state, setState] = useState<T>(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return [state, onChange, setState];
};

export default useForm;
