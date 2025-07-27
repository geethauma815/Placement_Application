const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Job Schema
const jobSchema = new mongoose.Schema({
  _id: String,
  desc: String,
  exp: Number,
  profile: String,
  techs: [String]
}, { collection: 'JobPost' }); // Use your existing collection name

const Job = mongoose.model('Job', jobSchema);

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.json({ message: 'Job posted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Filter jobs (e.g., by tech or profile)
router.get('/search', async (req, res) => {
  const { tech, profile } = req.query;

  let query = {};
  if (tech) query.techs = tech;
  if (profile) query.profile = new RegExp(profile, 'i');

  try {
    const results = await Job.find(query);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
