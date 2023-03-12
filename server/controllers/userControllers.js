import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
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
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.DECODE,
      {
        expiresIn: '48h',
      },
    );
    res.status(200).json({ success: true, result, token });
  } catch (err) {
    res.status(500).json({ message: 'Internal Error.' });
  }
};
