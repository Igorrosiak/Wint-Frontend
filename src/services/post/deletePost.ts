import { api } from "../../config/axios";

export default function deletePost(id: string): Promise<number> {
  return api.delete(`post/${id}`).then(
    (response) => {
      return response.status;
    },
    (error) => {
      return error.response.status;
    }
  );
}
