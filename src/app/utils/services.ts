import axios from "axios";
import { API_URL } from "./config";

export const serviceCall = (
  name: string,
  callback: (param: any) => void,
  data?: any,
  method?: "get" | "post" | "put" | "delete"
) => {
  const config = {
    method: method ?? "get",
    maxBodyLength: Infinity,
    url: `${API_URL}${name}`,
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: "Bearer 750|JvmCXTBv50yxjltDKQ1qQOgUyx6s5QHpyBr5f87W",
    },
    ...data,
  };

  axios(config)
    .then((response) => {
      callback(response.data.data);
    })
    .catch((error) => {
      console.error("Error fetching order data:", error);
      callback(error);
    });
};
