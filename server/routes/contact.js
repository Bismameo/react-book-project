import express from 'express';

const router = express.Router();
const messages = [];

router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email and message are required.'
    });
  }

  const submission = {
    id: Date.now(),
    name,
    email,
    subject: subject || 'General inquiry',
    message,
    createdAt: new Date().toISOString()
  };

  messages.push(submission);

  res.status(201).json({
    success: true,
    message: 'Your message has been sent successfully.',
    data: submission
  });
});

router.get('/', (req, res) => {
  res.json({
    success: true,
    count: messages.length,
    data: messages
  });
});

export default router;
