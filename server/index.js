import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './connection/connection.js';
import userRoutes from './routes/user.js';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 8080;

const main = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
  } catch (err) {
    throw err;
  }
};
main();
