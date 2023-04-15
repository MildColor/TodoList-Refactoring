export const emailValidator = (email: string) => {
  const rule = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/);
  const result = !rule.test(email.trim());
  return result;
};

export const passwordValidator = (password: string) => {
  const result = password.trim().length <= 8;
  return result;
};

export const emptyStringValidator = (stringArray: string[]) => {
  const hasEmptyString = !stringArray
    .map((v, _) => v.trim())
    .every((v) => v !== "");

  return hasEmptyString;
};
