const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

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
