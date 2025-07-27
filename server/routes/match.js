const express = require('express');
const router = express.Router();
const natural = require('natural');
const { JSDOM } = require('jsdom');

router.post('/match-score', (req, res) => {
  const { bio, jobDesc } = req.body;

  if (!bio || !jobDesc) {
    return res.status(400).json({ error: "bio and jobDesc are required" });
  }

  const tokenizer = new natural.WordTokenizer();
  const bioTokens = tokenizer.tokenize(bio.toLowerCase());
  const jobTokens = tokenizer.tokenize(jobDesc.toLowerCase());

  const tfidf = new natural.TfIdf();
  tfidf.addDocument(jobTokens.join(" "));
  tfidf.addDocument(bioTokens.join(" "));

  const score = tfidf.tfidf(bioTokens.join(" "), 0); // compare bio against jobDesc
  const matchScore = Math.min(Math.round(score * 10), 100); // scale to 0–100

  res.json({ matchScore });
});

module.exports = router;
