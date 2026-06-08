import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './configs/connectDB.js';
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
connectDB();

app.get('/', (req, res) => {
  res.json({ message: 'Server running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});