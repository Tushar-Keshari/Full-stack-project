const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');


const app = express();
app.use(cors());


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB', err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', userRoutes);

module.exports = mongoose;
module.exports = app;



