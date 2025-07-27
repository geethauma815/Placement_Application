const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String, // 'seeker' or 'poster'
  wallet: String
});

module.exports = mongoose.model('User', userSchema);
