export const getAccessToken = () => {
  const accessToken = localStorage.getItem("token");
  return accessToken;
};
export const getUserId = () => {
  const userId = localStorage.getItem("userId");
  return userId;
};
