import { api } from '../../config/axios';
import { Work } from '../../types/work';

export default function postWork(body: Work): Promise<Work> {
  return api.post(`work`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
