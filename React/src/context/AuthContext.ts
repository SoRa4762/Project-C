import { createContext } from "react";
import { AuthContextType } from "../interfaces/contextInterface";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
