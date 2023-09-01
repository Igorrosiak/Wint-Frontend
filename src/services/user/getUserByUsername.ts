import { api } from '../../config/axios';
import { User } from '../../types/user';

export default function getUserByUsername(username: string): Promise<User> {
  return api.get(`user/username/${username}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
