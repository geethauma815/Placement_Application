// src/components/Landing.js
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "36px", color: "#4b0082" }}>Welcome to SkillWise</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Smart hiring powered by AI and Web3
      </p>
      <Link to="/register">
        <button style={btnStyle}>Register as New User</button>
      </Link>
      <br /><br />
      <Link to="/login">
        <button style={btnStyle}>Login as Registered User</button>
      </Link>
    </div>
  );
}

const btnStyle = {
  padding: "12px 24px",
  fontSize: "16px",
  backgroundColor: "#4b0082",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default Landing;
