import { api } from '../../config/axios';
import { Blog } from '../../types/blog';

export default function postBlog(body: Blog): Promise<Blog> {
  return api.post(`blog`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
