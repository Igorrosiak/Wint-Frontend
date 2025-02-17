import { api } from '../../config/axios';
import { Work } from '../../types/work';

export default function getWorkById(id: string): Promise<Work> {
  return api.get(`work/${id}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
