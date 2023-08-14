import { api } from "../../config/axios";

export default function deleteSkill(id: string): Promise<number> {
  return api.delete(`skill/${id}`).then(
    (response) => {
      return response.status;
    },
    (error) => {
      return error.response.status;
    }
  );
}
