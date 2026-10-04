import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ResetPassword() {
  const { resetPassword } = useAuth();
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const email = searchParams.get('email') || '';
  const token = searchParams.get('token') || '';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    if (!token || !email) {
      setError('This reset link is incomplete. Request a new one.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await resetPassword({ email, token, password });
      if (result.success) {
        navigate('/login', { replace: true, state: { message: 'Password updated. Log in with your new password.' } });
      } else {
        setError(result.error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="auth-bg">
      <section className="auth-card">
        <Link to="/login" className="text-decoration-none">Back to login</Link>
        <h1 className="h3 mt-4 mb-2">Choose a new password</h1>
        <p className="text-secondary mb-4">Set a new password for {email || 'your account'}.</p>
        {error && <p className="text-danger" role="alert">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            className="auth-input mb-3"
            type="password"
            autoComplete="new-password"
            placeholder="New password (at least 8 characters)"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <input
            className="auth-input mb-3"
            type="password"
            autoComplete="new-password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
          <button className="auth-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Updating...' : 'Update password'}
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