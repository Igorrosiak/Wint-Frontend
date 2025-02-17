import { api } from '../../config/axios';
import { Recommendation } from '../../types/recommendation';

export default function getRecommendations(): Promise<Array<Recommendation>> {
  return api.get(`recommendations`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
