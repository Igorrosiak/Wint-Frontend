import { api } from '../../config/axios';
import { Curriculum } from '../../types/curriculum';

export default function postCurriculum(body: Curriculum): Promise<Curriculum> {
  return api.post(`curriculum`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
