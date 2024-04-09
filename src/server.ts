import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();

export const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server running on port ${port}`));