const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router/userRoute');
const chatRoutes = require('./router/chatRoute');
const messageRoutes = require('./router/messageRoute');

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.disable('x-powered-by');

// Http requests
app.get('/', (req, res) => {
  res.status(201).send('Home get request');
});

// Api request
app.use('/api', router);
// Chat Api Request
app.use('/api/chats', chatRoutes);
// Message Api Request
app.use('/api/message', messageRoutes);

mongoose
  .connect(process.env.MongoUrl)
  .then(() => {
    app.listen(process.env.port, () => {
      console.log(`Server running at http://localhost:${process.env.port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
