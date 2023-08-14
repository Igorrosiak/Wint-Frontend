import { api } from '../../config/axios';
import { Blog } from '../../types/blog';

export default function getBlogById(id: string): Promise<Blog> {
  return api.get(`blog/${id}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
