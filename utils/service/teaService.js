import { httpAxios } from "./httpService";
export const addMemories = async (credentials) => {
  const response = await httpAxios.post("/tea", credentials);
  return response;
};

export const addedMemories = async () => {
  const response = await httpAxios.get("/tea");
  return response;
};
