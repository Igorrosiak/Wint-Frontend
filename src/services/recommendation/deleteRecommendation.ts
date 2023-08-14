import { api } from "../../config/axios";

export default function deleteRecommendation(id: string): Promise<number> {
  return api.delete(`recommendation/${id}`).then(
    (response) => {
      return response.status;
    },
    (error) => {
      return error.response.status;
    }
  );
}
