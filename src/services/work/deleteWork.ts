import { api } from "../../config/axios";

export default function deleteWork(id: string): Promise<number> {
  return api.delete(`work/${id}`).then(
    (response) => {
      return response.status;
    },
    (error) => {
      return error;
    }
  );
}
