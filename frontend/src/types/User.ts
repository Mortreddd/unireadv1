export interface User {
  sub?: string;
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  image: string;
  super_user: boolean;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt?: string;
}
