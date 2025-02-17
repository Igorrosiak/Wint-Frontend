import { api } from "../../config/axios";

export default function deleteBlog(id: string): Promise<number> {
  return api.delete(`blog/${id}`).then(
    (response) => {
      return response.status;
    },
    (error) => {
      return error;
    }
  );
}
