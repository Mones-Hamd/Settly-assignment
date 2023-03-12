import bcryptjs from 'bcryptjs';
import User from '../models/User.js';
import { generateToken } from '../util/tokenGenerator.js';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req, res) => {
  const {
    firstName,
    surName,
    email,
    confirmedEmail,
    password,
    confirmedPassword,
  } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'This user is already exist' });
    if (password !== confirmedPassword)
      return res.status(400).json({ message: "Password don't match." });
    if (email !== confirmedEmail)
      return res.status(400).json({ message: "Email don't match." });

    const hashedPassword = await bcryptjs.hash(password, 10);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${surName}`,
    });
    const token = generateToken(result.email, result._id);
    res.status(200).json({ success: true, result, token });
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
    res.status(200).json({ success: true, result: existingUser, token });
  } catch (err) {
    res.status(500).json({ message: 'Internal Error' });
  }
};
