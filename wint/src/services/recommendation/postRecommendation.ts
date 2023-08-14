import { api } from '../../config/axios';
import { Recommendation } from '../../types/recommendation';

export default function postRecommendation(body: Recommendation): Promise<Recommendation> {
  return api.post(`recommendation`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
