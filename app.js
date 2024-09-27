const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Connection error', err));
  

//   mongodb://ich1:password@mongo.itcareerhub.de:27017/?readPreference=primary&ssl=false&authMechanism=DEFAULT&authSource=ich