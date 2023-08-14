import { api } from "../../config/axios";

export default function deletePortfolio(id: string): Promise<number> {
  return api.delete(`portfolio/${id}`).then(
    (response) => {
      return response.status;
    },
    (error) => {
      return error.response.status;
    }
  );
}
