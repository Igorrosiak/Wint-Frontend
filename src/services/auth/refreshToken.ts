import { api } from "../../config/axios";

export default function refreshToken(refreshToken: string): Promise<string> {
  return api.get(`auth/${refreshToken}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
