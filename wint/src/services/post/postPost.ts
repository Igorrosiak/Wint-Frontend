import { api } from '../../config/axios';
import { Post } from '../../types/post';

export default function postPost(body: Post): Promise<Post> {
  return api.post(`post`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
