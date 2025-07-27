/*const express = require('express');
const router = express.Router();

const SKILL_LIST = [
  "Java", "React", "Node.js", "MongoDB", "Python",
  "C++", "Machine Learning", "Communication", "Problem Solving",
  "Leadership", "Git", "Teamwork", "Express", "API", "Figma"
];

router.post('/extract-skills', (req, res) => {
  const { resumeText } = req.body;

  if (!resumeText) {
    return res.status(400).json({ error: "Missing resumeText" });
  }

  const extracted = SKILL_LIST.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  res.json({ skills: extracted });
});

module.exports = router;*/
const express = require('express');
const { OpenAI } = require('openai');
const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

router.post('/extract-skills', async (req, res) => {
  const { resumeText } = req.body;
  if (!resumeText) return res.status(400).json({ error: "Missing resumeText" });

  const prompt = `Extract 5-10 technical or soft skills from this resume:\n\n${resumeText}`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const skills = response.choices[0].message.content;
    res.json({ skills });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

