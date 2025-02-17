import { api } from "../../config/axios";
import { RequestAuth, ResponseAuth } from "../../types/auth";

export default function postLogin(body: RequestAuth): Promise<ResponseAuth> {
  return api.post(`auth/`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
