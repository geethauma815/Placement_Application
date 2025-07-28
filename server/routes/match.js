const { PythonShell } = require('python-shell');
const express = require('express');
const router = express.Router();

router.post('/match-score', async (req, res) => {
  const { jobDescription, candidateBio } = req.body;

  let options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: __dirname,
    args: [jobDescription, candidateBio],
  };

  PythonShell.run('match_score.py', options, function (err, results) {
    if (err) return res.status(500).json({ error: err.message });

    const score = parseFloat(results[0]);
    res.json({ score: Math.round(score * 100) });
  });
});

module.exports = router;
