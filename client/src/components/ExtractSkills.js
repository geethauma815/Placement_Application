import { useState } from "react";
import axios from "axios";

function ExtractSkills() {
  const [resumeText, setResumeText] = useState("");
  const [skills, setSkills] = useState("");

  const handleExtract = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/ai/extract-skills", {
        resumeText,
      });
      setSkills(res.data.skills);
    } catch (err) {
      alert("Failed to extract skills");
    }
  };

  return (
    <div>
      <h2>AI Skill Extractor</h2>
      <textarea
        rows="6"
        cols="50"
        placeholder="Paste your resume text here..."
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
      />
      <br />
      <button onClick={handleExtract}>Extract Skills</button>
      <h4>Extracted Skills:</h4>
      <pre>{skills}</pre>
    </div>
  );
}

export default ExtractSkills;
