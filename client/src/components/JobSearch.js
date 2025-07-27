import { useState } from "react";
import axios from "axios";

function JobSearch() {
  const [query, setQuery] = useState({ tech: "", profile: "" });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.get("http://localhost:5000/api/jobs/search", {
        params: query,
      });
      setResults(res.data);
      if (res.data.length === 0) {
        setMessage("No matching jobs found.");
      }
    } catch (err) {
      setMessage("Error fetching jobs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={headingStyle}> Search Jobs</h2>

        <input
          name="tech"
          placeholder="Tech (e.g., React)"
          onChange={handleChange}
          value={query.tech}
          style={inputStyle}
        />
        <input
          name="profile"
          placeholder="Profile (e.g., Developer)"
          onChange={handleChange}
          value={query.profile}
          style={inputStyle}
        />
        <button onClick={handleSearch} style={buttonStyle}>Search</button>

        {loading && <p style={msgStyle}>Loading...</p>}
        {message && <p style={msgStyle}>{message}</p>}

        <div>
          {results.map((job) => (
            <div key={job._id} style={cardStyle}>
              <h3>{job.profile} <span style={{ fontSize: "14px", color: "#888" }}>({job.exp} yrs)</span></h3>
              <p style={{ margin: "6px 0" }}>{job.desc}</p>
              <p><b>Techs:</b> {job.techs.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// CSS Styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  minHeight: "100vh",
  background: "linear-gradient(to right, #e0c3fc, #8ec5fc)",
  padding: "40px 0",
};

const boxStyle = {
  width: "500px",
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "10px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
};

const headingStyle = {
  color: "#4b0082",
  marginBottom: "20px",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "1rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#4b0082",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
  marginBottom: "20px",
};

const cardStyle = {
  backgroundColor: "#f9f9f9",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const msgStyle = {
  textAlign: "center",
  color: "#d32f2f",
  marginTop: "10px",
};

export default JobSearch;
