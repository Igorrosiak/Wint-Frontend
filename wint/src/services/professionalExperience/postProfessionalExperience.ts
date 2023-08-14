import { api } from '../../config/axios';
import { ProfessionalExperience } from '../../types/professionalExperience';

export default function postProfessionalExperience(body: ProfessionalExperience): Promise<ProfessionalExperience> {
  return api.post(`professionalExperience`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
