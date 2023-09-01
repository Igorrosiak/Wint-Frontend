import { api } from '../../config/axios';
import { UserRequest, UserResponse } from '../../types/user';

export default function postUser(body: UserRequest): Promise<UserResponse> {
  return api.post(`user`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
