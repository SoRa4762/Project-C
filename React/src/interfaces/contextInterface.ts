import { JwtPayload } from "jwt-decode";

// export interface User {
//   userId: string;
//   userEmail: string;
//   username: string;
// }

export interface AuthContextType {
  user: JwtPayload | null;
  login: (userData: JwtPayload) => void;
  logout: () => void;
}
