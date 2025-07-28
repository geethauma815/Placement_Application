const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: function (origin, callback) {
    // --- TEMPORARY DEBUG LOG ---
    console.log("Request Origin:", origin); 

    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Server is running');
});

/*const aiRoutes = require('./routes/ai');
app.use('/api/ai', aiRoutes);*/

const jobRoutes = require('./routes/jobs');
app.use('/api/jobs', jobRoutes);

const matchRoutes = require('./routes/match');
app.use('/api/match', matchRoutes);


//const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);




app.listen(5000, () => console.log("Server running on port 5000"));
