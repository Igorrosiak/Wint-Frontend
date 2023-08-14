import { api } from '../../config/axios';
import { Skill } from '../../types/skill';

export default function postSkill(body: Skill): Promise<Skill> {
  return api.post(`skill`, body).then(
    (response) => {
      return response.data;
    },
    (error) => {
      return error.response.status;
    }
  );
}
