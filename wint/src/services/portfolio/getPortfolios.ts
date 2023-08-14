import { api } from '../../config/axios';
import { Portfolio } from '../../types/portfolio';

export default function getPortfolios(): Promise<Array<Portfolio>> {
  return api.get(`portfolios`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
