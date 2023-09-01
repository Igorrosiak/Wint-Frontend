import { api } from '../../config/axios';
import { User } from '../../types/user';

export default function getUserById(id: string): Promise<User> {
  return api.get(`user/${id}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
