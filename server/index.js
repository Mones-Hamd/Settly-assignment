import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 8080;

const main = async () => {
  try {
    app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
  } catch (err) {
    throw err;
  }
};
main();