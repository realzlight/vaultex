import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './configs/connectDB.js';
import authRoutes from './routes/auth.js';
import protect from '../middleware/protect.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ 
  origin: 'http://localhost:5173',
  credentials: true 
}));
app.use(express.json());
app.use(cookieParser());

// Connect DB
await connectDB();

app.use('/api/auth', authRoutes);
app.post('/test', (req, res) => {
  res.json({ message: 'Test works' });
});


router.get('/verify', protect, (req, res) => {
  res.status(200).json({ valid: true });
});
app.get('/', (req, res) => {
  res.json({ message: 'Server running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
