export type UserRequest = {
  name: string;
  username: string;
  email: string;
  password: string;
  birthDate: string;
  role: string;
};

export type UserResponse = {
  id: string;
  name: string;
  email: string;
};
