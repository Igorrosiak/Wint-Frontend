import { api } from '../../config/axios';
import { Portfolio } from '../../types/portfolio';

export default function getPortfolioById(id: string): Promise<Portfolio> {
  return api.get(`portfolio/${id}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
