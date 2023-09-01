import { api } from "../../config/axios";
import { AuthBody } from "../../types/auth";

export default function postLogin(body: AuthBody): Promise<String> {
  return api.post(`auth`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
