import { api } from '../../config/axios';
import { ProfessionalExperience } from '../../types/professionalExperience';

export default function getProfessionalExperiences(): Promise<Array<ProfessionalExperience>> {
  return api.get(`professionalExperiences`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
