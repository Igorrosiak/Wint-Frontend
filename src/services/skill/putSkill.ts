import { api } from '../../config/axios';
import { Skill } from '../../types/skill';

export default function putSkill(id: string, body: Skill): Promise<Skill> {
  return api.put(`skill/${id}`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error;
    }
  );
}
