import { api } from '../../config/axios';
import { Skill } from '../../types/skill';

export default function getSkills(): Promise<Array<Skill>> {
  return api.get(`skills`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
