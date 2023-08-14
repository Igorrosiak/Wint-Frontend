import { api } from '../../config/axios';
import { Portfolio } from '../../types/portfolio';

export default function postPortfolio(body: Portfolio): Promise<Portfolio> {
  return api.post(`portfolio`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
