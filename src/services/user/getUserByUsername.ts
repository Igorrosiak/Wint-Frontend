import { api } from '../../config/axios';
import { UserResponse } from '../../types/user';

export default function getUserByUsername(username: string): Promise<UserResponse> {
  return api.get(`user/username/${username}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
