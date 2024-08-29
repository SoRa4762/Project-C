import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AuthContextType } from "../interfaces/contextInterface";

/**
 * Hook to access the authentication context.
 *
 * @return {AuthContextType} The authentication context.
 */

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
