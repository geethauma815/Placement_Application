const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

// =================== FIX STARTS HERE ===================

// 1. Create a list of all URLs that are allowed to access your backend.
const allowedOrigins = [
  'https://your-app-name.vercel.app', // Your live Vercel URL
  'http://localhost:3000',            // Your local development URL (if you use port 3000)
  // 'http://localhost:5173'          // Add this if you use Vite/port 5173
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests from the list, and also block requests with no origin (like Postman in some cases)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

// 2. Use the new, more flexible options.
app.use(cors(corsOptions));

// =================== FIX ENDS HERE =====================

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// ... (rest of your code remains the same)

app.get('/', (req, res) => {
  res.send('Server is running');
});

const jobRoutes = require('./routes/jobs');
app.use('/api/jobs', jobRoutes);

const matchRoutes = require('./routes/match');
app.use('/api/match', matchRoutes);

app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
