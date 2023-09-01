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
  username: string;
  email: string;
  password: string;
  birthDate: string;
  presentation?: string;
  githubLink?: string;
  linkedinLink?: string;
  instagramLink?: string;
  facebookLink?: string;
  twitterLink?: string;
};
