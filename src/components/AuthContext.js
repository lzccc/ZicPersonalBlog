import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [username, setUsername] = useState("testusername");
  const [password, setPassword] = useState("testpassword");

  return (
    <AuthContext.Provider
      value={{ username, setUsername, password, setPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}
