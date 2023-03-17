import bcryptjs from 'bcryptjs';
import User from '../models/User.js';
import { generateToken } from '../util/tokenGenerator.js';
import dotenv from 'dotenv';

import { isCapatchaVaild } from '../util/capatchaValidate.js';

dotenv.config();

export const register = async (req, res) => {
  const {
    firstName,
    surname,
    email,
    confirmedEmail,
    password,
    confirmedPassword,
    captchaValue,
  } = req.body;

  try {
    const isHuman = await isCapatchaVaild(captchaValue);
    if (isHuman) {
      const existingUser = await User.findOne({ email });
      if (existingUser)
        return res.status(409).json({ message: 'This user already exists' });
      if (password !== confirmedPassword)
        return res.status(400).json({ message: "Password don't match." });
      if (email !== confirmedEmail)
        return res.status(400).json({ message: "Email don't match." });

      const hashedPassword = await bcryptjs.hash(password, 10);

      const newUser = await User.create({
        firstName,
        surname,
        email,
        password: hashedPassword,
      });
      const token = generateToken(newUser.email, newUser._id);
      res.status(200).json({
        success: true,
        profile: {
          email: newUser.email,
          firstName: newUser.firstName,
          surname: newUser.surname,
          token,
        },
      });
    } else {
      res.status(400).json({ message: 'Invalid Captcha' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal Error.' });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "This User doesn't exist" });
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      existingUser.password,
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invaild Password' });
    const token = generateToken(email, existingUser._id);
    res.status(200).json({
      success: true,
      profile: {
        email: existingUser.email,
        firstName: existingUser.firstName,
        surname: existingUser.surname,
        token,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Internal Error' });
  }
};
