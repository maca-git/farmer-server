import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import usersRoutes from './routes/users';

const app = express();

const CONNECTION_URL = 'mongodb+srv://maca:123qwe@cluster0.cojnh.mongodb.net/app';
const PORT = process.env.PORT || 5000;

app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }));

app.use('/users', usersRoutes);
app.get('/', (req, res) => res.send('Welcome to the Money API!'));

mongoose.connect(
  CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
  .catch((e) => console.log(e));

mongoose.set('useFindAndModify', false);
