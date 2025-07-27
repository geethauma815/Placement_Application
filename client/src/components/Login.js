import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setMsg("✅ Login successful");
      navigate("/dashboard");
    } catch (err) {
      setMsg(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" style={buttonStyle}>Login</button>
        </form>

        {msg && <p style={msgStyle}>{msg}</p>}

        <p style={{ marginTop: "1rem" }}>Not registered yet?</p>
        <button onClick={() => navigate("/register")} style={registerButtonStyle}>
          Register
        </button>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(to right, #e0c3fc, #8ec5fc)",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  width: "300px",
  textAlign: "center",
};

const headingStyle = {
  marginBottom: "1.5rem",
  color: "#4b0082",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#4b0082",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

const registerButtonStyle = {
  marginTop: "0.5rem",
  backgroundColor: "#6a1b9a",
  color: "white",
  padding: "8px 16px",
  border: "none",
  borderRadius: "5px",
  fontSize: "14px",
  cursor: "pointer",
};

const msgStyle = {
  marginTop: "1rem",
  color: "#d32f2f",
  fontWeight: "bold",
};
