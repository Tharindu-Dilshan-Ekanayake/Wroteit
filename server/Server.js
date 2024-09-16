const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser'); // Add this line
require('dotenv').config();

const app = express();



mongoose
  .connect(process.env.REACT_APP_MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database not connected', err));

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cookieParser()); // Now this will work without error

//router
app.use('/user', require('./routes/userRoutes'))
app.use('/', require('./routes/authRoutes'))
app.use('/blog', require('./routes/blogRoutes'))

const port = 8000;

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
