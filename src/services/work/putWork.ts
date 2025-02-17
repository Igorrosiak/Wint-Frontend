import { api } from '../../config/axios';
import { Work } from '../../types/work';

export default function putWork(id: string, body: Work): Promise<Work> {
  return api.put(`work/${id}`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
