import jwt from 'jsonwebtoken';
export const generateToken = (email, id) => {
  const token = jwt.sign({ email, id }, process.env.DECODE, {
    expiresIn: '48h',
  });
  return token;
};
