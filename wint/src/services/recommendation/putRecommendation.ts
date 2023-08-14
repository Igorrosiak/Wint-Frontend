import { api } from '../../config/axios';
import { Recommendation } from '../../types/recommendation';

export default function putRecommendation(id: string, body: Recommendation): Promise<Recommendation> {
  return api.put(`recommendation/${id}`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
