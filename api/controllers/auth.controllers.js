import User from '../models/user.model.js';
// import bcrypt from 'bcryptjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import Venue from '../models/venue.model.js';

export const RegisterUser = async (req, res) => {
  try {
    const {email, password, firstName} = req.body;

    if (!email || !password || !firstName) {
      return res
        .status(400)
        .json({message: 'Email, password, and first name are required.'});
    }

    const existingUser = await User.findOne({email});
    if (existingUser) {
      return res
        .status(404)
        .json({message: 'User already exists with this email.'});
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      firstName,
    });

    const secretKey = 'ervcgfc';

    const token = await jwt.sign({userId: newUser._id}, secretKey);

    if (!token) {
      return res.status(500).json({message: 'Error to create token'});
    }

    res
      .status(201)
      .json({message: 'User registered successfully.', data: {newUser, token}});
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({message: 'Internal server error.'});
  }
};

export const LoginUser = async (req, res) => {
  try {
    const {email, password} = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({message: 'Email and password are required.'});
    }

    const existingUser = await User.findOne({email}).select('-password');

    if (!existingUser) {
      return res
        .status(404)
        .json({message: 'User does not exist with this email.'});
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({message: 'Incorrect email or password.'});
    }
    const secretKey = 'ervcgfc';

    const token = jwt.sign({userId: existingUser._id}, secretKey, {
      expiresIn: '7d',
    });

    res.status(200).json({
      message: 'Login successful.',
      data: {
        existingUser,
        token,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({message: 'Internal server error.'});
  }
};
