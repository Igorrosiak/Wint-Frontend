import { api } from '../../config/axios';
import { ProfessionalExperience } from '../../types/professionalExperience';

export default function getProfessionalExperienceById(id: string): Promise<ProfessionalExperience> {
  return api.get(`professionalExperience/${id}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
