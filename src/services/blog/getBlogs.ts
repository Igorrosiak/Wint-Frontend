import { api } from '../../config/axios';
import { Blog } from '../../types/blog';

export default function getBlogs(): Promise<Array<Blog>> {
  return api.get(`blogs`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
