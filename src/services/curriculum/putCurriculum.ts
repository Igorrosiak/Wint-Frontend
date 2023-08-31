import { api } from '../../config/axios';
import { Curriculum } from '../../types/curriculum';

export default function putCurriculum(id: string, body: Curriculum): Promise<Curriculum> {
  return api.put(`curriculum/${id}`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
