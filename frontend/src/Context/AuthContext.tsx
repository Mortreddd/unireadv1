import apiService from "@/Services/apiService";
import { User } from "@/types/User";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}
interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      const decoded = jwtDecode<User | null>(token);
      setUser(decoded);
      apiService.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  function login(token: string): void {
    localStorage.setItem("jwtToken", token);
    const decoded = jwtDecode<User>(token);
    setUser(decoded);
    apiService.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  function logout(): void {
    localStorage.removeItem("jwtToken");
    setUser(null);
    delete apiService.defaults.headers.common["Authorization"];
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
