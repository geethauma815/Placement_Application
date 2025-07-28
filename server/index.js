const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

// =================== FIX STARTS HERE ===================

// 1. Replace this with your actual Vercel frontend URL.
const vercelFrontendUrl = 'https://placement-application-1.onrender.com/'; 

const corsOptions = {
  origin: vercelFrontendUrl,
  optionsSuccessStatus: 200 // For legacy browser support
};

// 2. Use the new options in the cors middleware.
app.use(cors(corsOptions));

// =================== FIX ENDS HERE =====================

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Server is running');
});

const jobRoutes = require('./routes/jobs');
app.use('/api/jobs', jobRoutes);

const matchRoutes = require('./routes/match');
app.use('/api/match', matchRoutes);

app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
