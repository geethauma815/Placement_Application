import { useEffect, useState } from "react";
import axios from "axios";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>All Job Posts</h2>

      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        <div style={listStyle}>
          {jobs.map((job) => (
            <div key={job._id} style={cardStyle}>
              <h3 style={{ marginBottom: "0.5rem" }}>{job.profile} ({job.exp} yrs)</h3>
              <p style={{ color: "#333" }}>{job.desc}</p>
              <p><b>Techs:</b> <span style={{ color: "#555" }}>{job.techs.join(", ")}</span></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const containerStyle = {
  padding: "2rem",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f8f9fa",
  minHeight: "100vh"
};

const headingStyle = {
  color: "#4b0082",
  textAlign: "center",
  marginBottom: "2rem"
};

const listStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem"
};

const cardStyle = {
  backgroundColor: "white",
  padding: "1rem 1.5rem",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
};

export default JobList;
