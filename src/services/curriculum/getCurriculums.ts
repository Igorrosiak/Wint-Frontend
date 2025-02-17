import { api } from '../../config/axios';
import { Curriculum } from '../../types/curriculum';

export default function getCurriculums(): Promise<Array<Curriculum>> {
  return api.get(`curriculums`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
