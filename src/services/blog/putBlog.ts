import { api } from '../../config/axios';
import { Blog } from '../../types/blog';

export default function putBlog(id: string, body: Blog): Promise<Blog> {
  return api.put(`blog/${id}`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
