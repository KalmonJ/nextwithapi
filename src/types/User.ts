export interface User {
  id: string | number;
  username: string;
  email: string;
  password: string;
  profileImage: string | null;
}

export type Login = {
  data: Pick<User, "email" | "password">;
};
