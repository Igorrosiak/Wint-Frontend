import { api } from '../../config/axios';
import { UserRequest, UserResponse } from '../../types/user';

export default function putUser(id: string, body: UserRequest): Promise<UserResponse> {
  return api.put(`user/${id}`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
