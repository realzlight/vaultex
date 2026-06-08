import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

router.post('/signin', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // 1. Validate
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields required' });
    }
    
    // 2. Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }
    
    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // 4. Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });
    
    // 5. Create JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // 6. Save token to httpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,           // Can't access via JS - XSS protection
      secure: process.env.NODE_ENV === 'production', // true on https only
      sameSite: 'lax',          // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days
    });
    
    // 7. Send response without password + token
    res.status(201).json({
      message: 'User created successfully',
      user: { id: user._id, name: user.name, email: user.email }
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});








export default router;