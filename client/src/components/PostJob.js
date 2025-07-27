import { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

function PostJob() {
  const [mode, setMode] = useState("paid"); // "paid" or "free"

  const [form, setForm] = useState({
    _id: "",
    profile: "",
    desc: "",
    exp: "",
    techs: "",
  });

  const [walletAddress, setWalletAddress] = useState("");
  const [paid, setPaid] = useState(false);
  const platformFee = "0.001"; // ETH or MATIC

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const connectWallet = async () => {
    if (!window.ethereum) return alert("MetaMask not detected");

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setWalletAddress(accounts[0]);
    } catch (err) {
      alert("Wallet connection failed");
    }
  };

  const payPlatformFee = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const tx = await signer.sendTransaction({
        to: "0x6dc2dD54F24979eC26212794C71aFEFeD722280c",
        value: ethers.parseEther(platformFee),
      });
      await tx.wait();
      alert("Payment Successful");
      setPaid(true);
    } catch (err) {
      alert("Payment failed: " + err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "paid" && !paid) {
      return alert("Please pay the platform fee first");
    }

    const payload = {
      ...form,
      exp: parseInt(form.exp),
      techs: form.techs.split(",").map((t) => t.trim()),
    };

    try {
      const res = await axios.post("https://placement-application-1.onrender.com/api/jobs", payload);
      alert(res.data.message);
    } catch (err) {
      alert("Error: " + err.response.data.error);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formBox}>
        <h2 style={headingStyle}>Post a New Job</h2>

        {/* Option selector */}
        <div style={{ marginBottom: "1rem" }}>
          <button onClick={() => setMode("paid")} style={mode === "paid" ? activeBtn : inactiveBtn}>
            Post With Payment
          </button>
          <button onClick={() => setMode("free")} style={mode === "free" ? activeBtn : inactiveBtn}>
            Post Without Payment (Demo)
          </button>
        </div>

        {/* Wallet & Payment buttons only for "paid" mode */}
        {mode === "paid" && !walletAddress && (
          <button onClick={connectWallet} style={btnStyle}>Connect Wallet</button>
        )}
        {mode === "paid" && walletAddress && !paid && (
          <button onClick={payPlatformFee} style={btnStyle}>Pay {platformFee} ETH</button>
        )}
        {mode === "paid" && paid && (
          <p style={{ color: "green", fontWeight: "bold" }}>✔ Payment Complete</p>
        )}

        <form onSubmit={handleSubmit}>
          <input name="_id" placeholder="Job ID" onChange={handleChange} required style={inputStyle} />
          <input name="profile" placeholder="Profile" onChange={handleChange} required style={inputStyle} />
          <textarea name="desc" placeholder="Description" onChange={handleChange} required style={textareaStyle} />
          <input name="exp" type="number" placeholder="Experience (years)" onChange={handleChange} required style={inputStyle} />
          <input name="techs" placeholder="Techs (comma separated)" onChange={handleChange} required style={inputStyle} />
          <button type="submit" style={submitStyle}>
            Post Job
          </button>
        </form>
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
  background: "linear-gradient(to right, #e0c3fc, #8ec5fc)",
};

const formBox = {
  background: "#fff",
  padding: "2rem",
  borderRadius: "10px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  width: "400px",
  textAlign: "center",
};

const headingStyle = {
  marginBottom: "1rem",
  color: "#4b0082",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  height: "80px",
  marginBottom: "1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const btnStyle = {
  marginBottom: "1rem",
  padding: "10px 20px",
  backgroundColor: "#6a1b9a",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "15px",
};

const submitStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#4b0082",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
};

const activeBtn = {
  ...btnStyle,
  backgroundColor: "#4b0082",
  marginRight: "10px",
};

const inactiveBtn = {
  ...btnStyle,
  backgroundColor: "#bbb",
  marginRight: "10px",
};

export default PostJob;
