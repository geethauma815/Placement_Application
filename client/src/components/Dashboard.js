import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "Arial" }}>
      <h1 style={{ color: "#4b0082" }}>Placement Prep Dashboard</h1>
      <p>Welcome! What would you like to do today?</p>

      <div style={{ marginTop: "30px" }}>
        <Link to="/post-job">
          <button style={btnStyle}>Post a Job</button>
        </Link>
        <br /><br />
        <Link to="/search-job">
          <button style={btnStyle}>Search for Jobs</button>
        </Link>
        <br /><br />
        <Link to="/jobs">
          <button style={btnStyle}>View All Job Posts</button>
        </Link>
        <br /><br />
        <Link to="/match-score">
          <button style={btnStyle}>Search Job Matches</button>
        </Link>
      </div>
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
  width: "220px"
};

export default Dashboard;
