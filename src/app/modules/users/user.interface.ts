export interface IUser {
  id: string; // UUID
  name: string;
  email: string;
  password: string;
  photoUrl?: string | null; // optional
  age?: number | null; // optional
  phone?: string | null; // optional
  address?: string | null; // optional
  role: "user" | "librarian" | "admin"; // enum-like values
  createdAt: Date;
  updatedAt: Date;
}
