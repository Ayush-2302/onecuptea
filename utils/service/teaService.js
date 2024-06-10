import { httpAxios } from "./httpService";
export const addMemories = async (credentials) => {
  const formData = new FormData();
  for (const key in credentials) {
    if (credentials.hasOwnProperty(key)) {
      formData.append(key, credentials[key]);
    }
  }

  const response = await httpAxios.post("/tea", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

export const addedMemories = async () => {
  const response = await httpAxios.get("/tea");
  return response;
};
