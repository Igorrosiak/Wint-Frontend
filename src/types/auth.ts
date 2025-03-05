import { UserResponse } from "./user";

export type RequestAuth = {
  email: string;
  password: string;
};

export type ResponseAuth = {
  accessToken: string;
  refreshToken: string;
  user: UserResponse;
};
