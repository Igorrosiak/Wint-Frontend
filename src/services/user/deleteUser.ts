import { api } from "../../config/axios";

export default function deleteUser(id: string): Promise<number> {
  return api.delete(`user/${id}`).then(
    (response) => {
      return response.status;
    },
    (error) => {
      return error;
    }
  );
}
