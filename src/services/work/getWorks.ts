import { api } from '../../config/axios';
import { Work } from '../../types/work';

export default function getWorks(): Promise<Array<Work>> {
  return api.get(`work`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
