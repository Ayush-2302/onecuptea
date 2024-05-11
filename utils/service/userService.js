import { httpAxios } from "./httpService";
export const createUser = async (credential) => {
  const response = await httpAxios.post("/user/signup", credential);
  console.log(response);
  return response;
};

export const login = async (credential) => {
  const response = await httpAxios.post("/user/login", credential);
  if (response.data.authToken) {
    localStorage.setItem("token", response.data.authToken);
  }
  console.log(response, " response");
  return response;
};
export const logout = async () => {
  const response = await httpAxios.post("/user/logout");
  console.log(response, " response");
};
