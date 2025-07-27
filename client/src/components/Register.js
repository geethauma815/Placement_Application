import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "seeker",
    wallet: "",
  });
  const [msg, setMsg] = useState("");
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      setMsg("✅ Registered successfully");
      setRegistered(true);
    } catch (err) {
      setMsg(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="wallet"
            placeholder="Wallet Address (optional)"
            onChange={handleChange}
            style={inputStyle}
          />
          <select
            name="role"
            onChange={handleChange}
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <option value="seeker">Job Seeker</option>
            <option value="poster">Job Poster</option>
          </select>
          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>

        {msg && <p style={msgStyle}>{msg}</p>}

        {registered && (
          <button
            style={{ ...buttonStyle, backgroundColor: "#4CAF50", marginTop: "1rem" }}
            onClick={() => navigate("/login")}
          >
            Go to Login →
          </button>
        )}
      </div>
    </div>
  );
}

// Reuse same styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(to right, #c2e9fb, #a1c4fd)",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
  width: "320px",
  textAlign: "center",
};

const headingStyle = {
  marginBottom: "1.5rem",
  color: "#1a237e",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "1rem",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#1a237e",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
};

const msgStyle = {
  marginTop: "1rem",
  color: "#2e7d32",
  fontWeight: "bold",
};
