import { api } from '../../config/axios';
import { User } from '../../types/user';

export default function postUser(body: User): Promise<User> {
  return api.post(`user`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
