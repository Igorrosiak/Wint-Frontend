import { api } from '../../config/axios';
import { Post } from '../../types/post';

export default function getPostById(id: string): Promise<Post> {
  return api.get(`post/${id}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
