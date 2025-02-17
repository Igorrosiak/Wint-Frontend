import { api } from '../../config/axios';
import { Curriculum } from '../../types/curriculum';

export default function getCurriculumById(id: string): Promise<Curriculum> {
  return api.get(`curriculum/${id}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
