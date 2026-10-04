import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ForgotPassword() {
  const { requestPasswordReset } = useAuth();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');
    setIsSubmitting(true);
    try {
      const result = await requestPasswordReset(email);
      if (!result.success) {
        setError(result.error);
      } else if (result.resetToken) {
        const query = new URLSearchParams({ email: email.trim(), token: result.resetToken });
        navigate(`/reset-password?${query.toString()}`);
      } else {
        setMessage('If an account exists for that email, reset instructions will be sent.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="auth-bg">
      <section className="auth-card">
        <Link to="/login" className="text-decoration-none">Back to login</Link>
        <h1 className="h3 mt-4 mb-2">Reset your password</h1>
        <p className="text-secondary mb-4">Enter the email address on your account.</p>
        {error && <p className="text-danger" role="alert">{error}</p>}
        {message && <p className="text-success" role="status">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            className="auth-input mb-3"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button className="auth-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send reset instructions'}
          </button>
        </form>
      </section>
      <style>{`
        .auth-bg{min-height:100vh;background:linear-gradient(135deg,#000 0%,#111 100%);display:flex;align-items:center;justify-content:center;padding:24px}
        .auth-card{background:#fff;border-radius:16px;padding:clamp(24px,5vw,44px);width:100%;max-width:440px;box-shadow:0 25px 60px rgba(0,0,0,.25)}
        .auth-input{width:100%;padding:12px 14px;border:1px solid #d1d5db;border-radius:8px}
        .auth-btn{width:100%;background:#000;color:#fff;border:0;border-radius:24px;padding:13px;font-weight:600}
        .auth-btn:disabled{opacity:.65;cursor:wait}
      `}</style>
    </main>
  );
}