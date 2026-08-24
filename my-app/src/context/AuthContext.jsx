import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const USERS_KEY = "bookexpress_users";
const CURRENT_USER_KEY = "bookexpress_current_user";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(CURRENT_USER_KEY);
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    }
  }, []);

  const login = useCallback((email, password) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) {
      return { success: false, error: "Invalid email or password" };
    }
    const safe = { id: found.id, name: found.name, email: found.email };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safe));
    setUser(safe);
    return { success: true };
  }, []);

  const signup = useCallback((formData) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const exists = users.find((u) => u.email === formData.email);
    if (exists) {
      return { success: false, error: "Email already registered" };
    }
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    const safe = { id: newUser.id, name: newUser.name, email: newUser.email };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safe));
    setUser(safe);
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(CURRENT_USER_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
