import { api } from "../../config/axios";

export default function deleteProfessionalExperience(id: string): Promise<number> {
  return api.delete(`professionalExperience/${id}`).then(
    (response) => {
      return response.status;
    },
    (error) => {
      return error.response.status;
    }
  );
}
