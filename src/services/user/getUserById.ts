import { api } from '../../config/axios';
import { UserResponse } from '../../types/user';

export default function getUserById(id: string): Promise<UserResponse> {
  return api.get(`user/${id}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
