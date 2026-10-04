import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

import booksRouter from './routes/books.js';
import authRouter from './routes/auth.js';
import contactRouter from './routes/contact.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true
  })
);
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'BookExpress API is running',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/books', booksRouter);
app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found.'
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`BookExpress backend running on http://localhost:${PORT}`);
});
