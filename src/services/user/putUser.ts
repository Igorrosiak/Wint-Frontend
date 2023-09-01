import { api } from '../../config/axios';
import { User } from '../../types/user';

export default function putUser(id: string, body: User): Promise<User> {
  return api.put(`user/${id}`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
