import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [username, setUsername] = useState("zic");
  const [password, setPassword] = useState("lizichong081");

  return (
    <AuthContext.Provider
      value={{ username, setUsername, password, setPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}
