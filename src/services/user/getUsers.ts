import { api } from '../../config/axios';
import { User } from '../../types/user';

export default function getUsers(): Promise<Array<User>> {
  return api.get(`users`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
