import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const CURRENT_USER_KEY = "bookexpress_current_user";

const AuthContext = createContext(null);
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

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

  const login = useCallback(async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        return { success: false, error: result.message || 'Invalid email or password' };
      }

      const safe = { id: result.user.id, name: result.user.name, email: result.user.email };
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safe));
      setUser(safe);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Unable to connect to the server.' };
    }
  }, []);

  const signup = useCallback(async (formData) => {
    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        return { success: false, error: result.message || 'Signup failed.' };
      }

      const safe = { id: result.user.id, name: result.user.name, email: result.user.email };
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safe));
      setUser(safe);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Unable to connect to the server.' };
    }
  }, []);

  const requestPasswordReset = useCallback(async (email) => {
    try {
      const response = await fetch(`${API_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      return response.ok && result.success
        ? { success: true, resetToken: result.resetToken }
        : { success: false, error: result.message || 'Unable to request a password reset.' };
    } catch (error) {
      return { success: false, error: 'Unable to connect to the server.' };
    }
  }, []);

  const resetPassword = useCallback(async ({ email, token, password }) => {
    try {
      const response = await fetch(`${API_URL}/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token, password }),
      });
      const result = await response.json();
      return response.ok && result.success
        ? { success: true }
        : { success: false, error: result.message || 'Unable to reset password.' };
    } catch (error) {
      return { success: false, error: 'Unable to connect to the server.' };
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(CURRENT_USER_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, requestPasswordReset, resetPassword, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
