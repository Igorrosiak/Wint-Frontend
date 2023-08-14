import { api } from '../../config/axios';
import { Portfolio } from '../../types/portfolio';

export default function putPortfolio(id: string, body: Portfolio): Promise<Portfolio> {
  return api.put(`portfolio/${id}`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
