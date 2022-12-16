const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data.js/data');
const connectDb = require('./config/db');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
dotenv.config();

connectDb();

app.use(express.json()); //To accept JSON Data

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

// const singleChat = chats.find((c) => c._id === req.params.id);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`.yellow.bold));
