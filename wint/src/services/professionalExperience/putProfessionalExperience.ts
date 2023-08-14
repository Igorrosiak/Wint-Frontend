import { api } from '../../config/axios';
import { ProfessionalExperience } from '../../types/professionalExperience';

export default function putProfessionalExperience(id: string, body: ProfessionalExperience): Promise<ProfessionalExperience> {
  return api.put(`professionalExperience/${id}`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
