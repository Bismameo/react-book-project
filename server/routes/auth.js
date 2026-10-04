import express from 'express';
import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { saveUsers, users } from '../data/users.js';

const router = express.Router();
const RESET_TOKEN_TTL = 15 * 60 * 1000;

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `scrypt$${salt}$${hash}`;
}

function verifyPassword(password, storedPassword) {
  const [algorithm, salt, storedHash] = String(storedPassword).split('$');
  if (algorithm !== 'scrypt' || !salt || !storedHash) return false;

  const expected = Buffer.from(storedHash, 'hex');
  const actual = scryptSync(password, salt, expected.length);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

function hashResetToken(token) {
  return createHash('sha256').update(token).digest('hex');
}

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body || {};
  const normalizedName = String(name || '').trim();
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedName || !normalizedEmail || !password) {
    return res.status(400).json({
      success: false,
      message: 'Name, email and password are required.'
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return res.status(400).json({ success: false, message: 'Enter a valid email address.' });
  }

  if (String(password).length < 8) {
    return res.status(400).json({ success: false, message: 'Password must be at least 8 characters.' });
  }

  const existingUser = users.find((user) => normalizeEmail(user.email) === normalizedEmail);

  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: 'Email already registered.'
    });
  }

  const newUser = {
    id: Date.now(),
    name: normalizedName,
    email: normalizedEmail,
    password: hashPassword(String(password))
  };

  users.push(newUser);
  saveUsers();

  res.status(201).json({
    success: true,
    message: 'User registered successfully.',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    }
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body || {};
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedEmail || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required.'
    });
  }

  const user = users.find((entry) =>
    normalizeEmail(entry.email) === normalizedEmail &&
    verifyPassword(String(password), entry.password)
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email or password.'
    });
  }

  res.json({
    success: true,
    message: 'Login successful.',
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
});

router.post('/forgot-password', (req, res) => {
  const email = normalizeEmail(req.body?.email);
  const user = users.find((entry) => normalizeEmail(entry.email) === email);
  let resetToken;

  if (user) {
    resetToken = randomBytes(32).toString('hex');
    user.resetTokenHash = hashResetToken(resetToken);
    user.resetTokenExpiresAt = Date.now() + RESET_TOKEN_TTL;
    saveUsers();
  }

  const response = {
    success: true,
    message: 'If an account exists for that email, password reset instructions will be sent.'
  };

  if (user && process.env.NODE_ENV !== 'production') {
    response.resetToken = resetToken;
  }

  res.json(response);
});

router.post('/reset-password', (req, res) => {
  const email = normalizeEmail(req.body?.email);
  const { token, password } = req.body || {};
  const user = users.find((entry) => normalizeEmail(entry.email) === email);

  if (!user || !token || !password || String(password).length < 8) {
    return res.status(400).json({ success: false, message: 'Invalid or expired reset request.' });
  }

  const storedTokenHash = Buffer.from(user.resetTokenHash || '', 'hex');
  const submittedTokenHash = Buffer.from(hashResetToken(String(token)), 'hex');
  const tokenMatches = storedTokenHash.length === submittedTokenHash.length &&
    storedTokenHash.length > 0 && timingSafeEqual(storedTokenHash, submittedTokenHash);

  if (!tokenMatches || user.resetTokenExpiresAt <= Date.now()) {
    return res.status(400).json({ success: false, message: 'Invalid or expired reset request.' });
  }

  user.password = hashPassword(String(password));
  delete user.resetTokenHash;
  delete user.resetTokenExpiresAt;
  saveUsers();

  res.json({ success: true, message: 'Password updated. You can now log in.' });
});

export default router;
