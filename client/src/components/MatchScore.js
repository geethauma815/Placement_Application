import { useState } from "react";
import axios from "axios";

function MatchScore() {
  const [bio, setBio] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [score, setScore] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://placement-application-1.onrender.com/api/match/match-score", {
        bio,
        jobDesc
      });
      setScore(res.data.matchScore);
    } catch (err) {
      alert("Error calculating match score");
      setScore(null);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}> Job Applicant Match Score</h2>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Applicant Bio</label>
          <textarea
            rows="5"
            style={textareaStyle}
            placeholder="Enter applicant bio..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
          <label style={labelStyle}>Job Description</label>
          <textarea
            rows="5"
            style={textareaStyle}
            placeholder="Enter job description..."
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            required
          />
          <button type="submit" style={buttonStyle}>Get Match Score</button>
        </form>

        {score !== null && (
          <div style={scoreStyle}>
            ✅ <strong>Match Score:</strong> {score} / 100
          </div>
        )}
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "linear-gradient(to right, #c2e9fb, #a1c4fd)",
  padding: "20px"
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  width: "600px",
  maxWidth: "100%"
};

const headingStyle = {
  color: "#4b0082",
  textAlign: "center",
  marginBottom: "1.5rem"
};

const labelStyle = {
  fontWeight: "bold",
  display: "block",
  margin: "1rem 0 0.5rem",
  color: "#333"
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  resize: "vertical"
  
};

const buttonStyle = {
  marginTop: "20px",
  padding: "12px",
  width: "100%",
  backgroundColor: "#4b0082",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer"
};

const scoreStyle = {
  marginTop: "1.5rem",
  fontSize: "1.2rem",
  color: "#006400",
  textAlign: "center"
};

export default MatchScore;
