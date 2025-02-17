import { api } from '../../config/axios';
import { Skill } from '../../types/skill';

export default function getSkillById(id: string): Promise<Skill> {
  return api.get(`skill/${id}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
