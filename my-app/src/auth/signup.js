import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaBookOpen, FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";

export default function Signup() {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    const result = signup({ name, email, password });
    if (result.success) {
      navigate("/", { replace: true });
    } else {
      setError(result.error);
    }
  };

  return (
    <>
      <style>{`
        .auth-bg {
          min-height: 100vh;
          background: linear-gradient(135deg, #000000 0%, #111111 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(24px, 5vw, 40px) 0;
        }
        .auth-card {
          background: #fff;
          border-radius: 20px;
          padding: clamp(30px, 5vw, 48px);
          width: 100%;
          max-width: 420px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.25);
        }
        .auth-input {
          width: 100%;
          padding: clamp(10px, 2vw, 14px) clamp(12px, 2.5vw, 16px);
          border: 1px solid #d1d5db;
          border-radius: 10px;
          font-size: clamp(0.85rem, 1.8vw, 0.95rem);
          transition: border-color 0.2s ease;
        }
        .auth-input:focus { outline: none; border-color: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
        .auth-btn {
          width: 100%;
          background: #000000;
          color: #fff;
          border: 1px solid #27272a;
          border-radius: 30px;
          padding: clamp(12px, 2vw, 16px);
          font-weight: 600;
          font-size: clamp(0.9rem, 1.8vw, 1rem);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .auth-btn:hover { background: #111111; }
        .auth-error { color: #EF4444; font-size: 0.85rem; }
        @media(max-width:576px){
          .auth-card { padding: clamp(22px, 5vw, 32px); }
        }
      `}</style>

      <div className="auth-bg">
        <div className="auth-card">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <Link to="/" className="d-flex align-items-center text-decoration-none" style={{ color: "#0F172A" }}>
              <FaArrowLeft className="me-2" />
              Back
            </Link>
            <div className="d-flex align-items-center gap-2" style={{ color: "#0F172A", fontWeight: "700", fontSize: "1.2rem" }}>
              <FaBookOpen /> BookExpress
            </div>
          </div>

          <h2 style={{ fontWeight: "700", marginBottom: "8px", fontSize: "clamp(1.5rem, 3vw, 1.8rem)" }}>
            Create Account
          </h2>
          <p style={{ color: "#64748b", marginBottom: "24px", fontSize: "clamp(0.85rem, 1.6vw, 0.95rem)" }}>
            Sign up to start shopping and track your orders.
          </p>

          {error && <div className="auth-error mb-3">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="auth-input"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="auth-input"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="auth-input pe-5"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ background: "transparent", border: "none", color: "#64748b", cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="mb-4 position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="auth-input pe-5"
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
              <button
                type="button"
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ background: "transparent", border: "none", color: "#64748b", cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button type="submit" className="auth-btn mb-3">
              Sign Up
            </button>
          </form>

          <p style={{ color: "#64748b", fontSize: "clamp(0.8rem, 1.4vw, 0.85rem)", textAlign: "center" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#3B82F6", fontWeight: "600" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
