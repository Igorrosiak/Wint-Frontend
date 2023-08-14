import { api } from '../../config/axios';
import { Post } from '../../types/post';

export default function getPosts(): Promise<Array<Post>> {
  return api.get(`posts`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
