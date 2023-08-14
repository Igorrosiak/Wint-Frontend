import { api } from '../../config/axios';
import { Recommendation } from '../../types/recommendation';

export default function getRecommendationById(id: string): Promise<Recommendation> {
  return api.get(`recommendation/${id}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
