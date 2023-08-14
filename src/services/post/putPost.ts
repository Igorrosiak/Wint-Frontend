import { api } from '../../config/axios';
import { Post } from '../../types/post';

export default function putPost(id: string, body: Post): Promise<Post> {
  return api.put(`post/${id}`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
