import { useState, ReactNode, FC, useEffect } from "react";
import { AuthContext } from "./AuthContext";
// import { User } from "../interfaces/contextInterface";
import { JwtPayload } from "jwt-decode";

//* 1 way: export const AuthProvider = ({ children }: { children: ReactNode }) => {
// 2nd way can cause error if you have not returned a functional component; since you are telling that it is a functional component
export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<JwtPayload | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData: JwtPayload) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "user") {
        setUser(event.newValue ? JSON.parse(event.newValue) : null);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
