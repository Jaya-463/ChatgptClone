const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorMiddleware');
const mongoose = require('mongoose');
//routers path
const authRoutes = require('./routers/authRoutes');
const connectDB = require('./config/db');
// dotenv config
dotenv.config();

// connect to MongoDB
connectDB();

// App init
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(errorHandler);

// Route test
app.get('/', (req, res) => {
  res.send('API is working');
});

// API routes
app.use('/api/v1/auth', authRoutes);

// Error handler (should be after routes)
app.use(errorHandler);

// Port
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});

