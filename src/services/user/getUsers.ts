import { api } from '../../config/axios';
import { UserResponse } from '../../types/user';

export default function getUsers(): Promise<Array<UserResponse>> {
  return api.get(`users`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
