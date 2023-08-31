import { api } from "../../config/axios";

export default function deleteCurriculum(id: string): Promise<number> {
  return api.delete(`curriculum/${id}`).then(
    (response) => {
      return response.status;
    },
    (error) => {
      return error.response.status;
    }
  );
}
