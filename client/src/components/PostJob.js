/*import { useState } from "react";
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
        to: "0xF2f8466780f45536bC254d0882A4F6608b631b88",
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

        {}
        <div style={{ marginBottom: "1rem" }}>
          <button onClick={() => setMode("paid")} style={mode === "paid" ? activeBtn : inactiveBtn}>
            Post With Payment
          </button>
          <button onClick={() => setMode("free")} style={mode === "free" ? activeBtn : inactiveBtn}>
            Post Without Payment (Demo)
          </button>
        </div>

        {}
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

export default PostJob;*/
/*import { useState } from "react";
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
  const platformFee = "0.00001"; // in MATIC

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
        to: "0x0A499e74e5C49e111a9D86Ae6A5f1306982782Bf",
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
      const res = await axios.post("http://localhost:5000/api/jobs", payload);
      alert(res.data.message);
    } catch (err) {
      alert("Error: " + err?.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formBox}>
        <h2 style={headingStyle}>Post a New Job</h2>

        {}
        <div style={{ marginBottom: "1rem" }}>
          <button onClick={() => setMode("paid")} style={mode === "paid" ? activeBtn : inactiveBtn}>
            Post With Payment
          </button>
          <button onClick={() => setMode("free")} style={mode === "free" ? activeBtn : inactiveBtn}>
            Post Without Payment (Demo)
          </button>
        </div>

        {}
        {mode === "paid" && !walletAddress && (
          <button onClick={connectWallet} style={btnStyle}>Connect Wallet</button>
        )}
        {mode === "paid" && walletAddress && !paid && (
          <button onClick={payPlatformFee} style={btnStyle}>Pay {platformFee} MATIC</button>
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

export default PostJob;*/


import { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";

// --- Constants for easy configuration ---
const POLYGON_AMOY_CHAIN_ID = "0x13882"; // 80002
const PLATFORM_FEE_AMOY = "0.001";
const RECEIVER_ADDRESS = "0x0A499e74e5C49e111a9D86Ae6A5f1306982782Bf";
const API_URL = "https://placement-application-1.onrender.com/api/jobs";

function PostJob() {
  const [mode, setMode] = useState("paid"); // "paid" or "free"
  const [form, setForm] = useState({
    _id: "",
    profile: "",
    desc: "",
    exp: "",
    techs: "",
  });
  
  // --- State for UI and Wallet ---
  const [walletAddress, setWalletAddress] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // { text: '', type: 'success' | 'error' }

  // --- Clear messages when switching modes ---
  useEffect(() => {
    setMessage(null);
  }, [mode]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleWalletAction = async (action) => {
    if (!window.ethereum) {
      setMessage({ text: "MetaMask not detected. Please install it.", type: "error" });
      return;
    }
    setLoading(true);
    setMessage(null);
    try {
      await action();
    } catch (err) {
      // Handle specific errors from MetaMask or the transaction
      let errorMessage = "An unexpected error occurred.";
      if (err.code === 4001 || err.code === "ACTION_REJECTED") {
        errorMessage = "Request rejected in wallet.";
      } else if (err.code === 4902) {
        // Chain not added, try adding it
        await addPolygonAmoyNetwork();
        // Optionally, retry the action after adding the network
        // await action(); 
      } else if (err.reason) {
        errorMessage = err.reason;
      } else if (err.message) {
        errorMessage = err.message;
      }
      setMessage({ text: errorMessage, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const connectWallet = () => handleWalletAction(async () => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: POLYGON_AMOY_CHAIN_ID }],
    });
    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    setWalletAddress(accounts[0]);
    setMessage({ text: "Wallet connected successfully!", type: "success" });
  });

  const addPolygonAmoyNetwork = async () => {
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [{
        chainId: POLYGON_AMOY_CHAIN_ID,
        chainName: "Polygon Amoy Testnet",
        nativeCurrency: { name: "AMOY", symbol: "AMOY", decimals: 18 },
        rpcUrls: ["https://rpc-amoy.polygon.technology"],
        blockExplorerUrls: ["https://www.oklink.com/amoy"]
      }]
    });
  };

  const payPlatformFee = () => handleWalletAction(async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    
    const value = ethers.parseEther(PLATFORM_FEE_AMOY);
    const tx = await signer.sendTransaction({
      to: RECEIVER_ADDRESS,
      value: value,
    });

    setMessage({ text: "Processing payment... please wait.", type: "info" });
    const receipt = await tx.wait();

    if (receipt.status === 1) {
      setMessage({ text: "Payment Successful!", type: "success" });
      setIsPaid(true);
    } else {
      throw new Error("Transaction failed on-chain.");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "paid" && !isPaid) {
      setMessage({ text: "Please pay the platform fee before submitting.", type: "error" });
      return;
    }
    
    const payload = {
      ...form,
      exp: parseInt(form.exp, 10),
      techs: form.techs.split(",").map((t) => t.trim()),
      payerAddress: mode === "paid" ? walletAddress : "free_submission",
    };

    setLoading(true);
    setMessage(null);
    try {
      const res = await axios.post(API_URL, payload);
      setMessage({ text: res.data.message || "Job posted successfully!", type: "success" });
      setForm({ _id: "", profile: "", desc: "", exp: "", techs: "" });
      if (mode === "paid") setIsPaid(false);
    } catch (err) {
      const errorText = err.response?.data?.error || err.message;
      setMessage({ text: `Submission Failed: ${errorText}`, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2 style={styles.heading}>Post a New Job</h2>

        {/* --- Message Display --- */}
        {message && (
          <div style={{...styles.message, ...styles[message.type]}}>
            {message.text}
          </div>
        )}

        <div style={styles.modeSelector}>
          <button 
            onClick={() => setMode("paid")} 
            style={mode === "paid" ? styles.activeBtn : styles.inactiveBtn}
            disabled={loading}
          >
            Paid Post
          </button>
          <button 
            onClick={() => setMode("free")} 
            style={mode === "free" ? styles.activeBtn : styles.inactiveBtn}
            disabled={loading}
          >
            Free Post (Demo)
          </button>
        </div>

        {mode === "paid" && !walletAddress && (
          <button onClick={connectWallet} style={styles.btnStyle} disabled={loading}>
            {loading ? "Connecting..." : "Connect Wallet"}
          </button>
        )}
        
        {mode === "paid" && walletAddress && !isPaid && (
          <>
            <p style={styles.walletInfo}>Connected: {`${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}`}</p>
            <button onClick={payPlatformFee} style={styles.btnStyle} disabled={loading}>
              {loading ? "Processing..." : `Pay ${PLATFORM_FEE_AMOY} AMOY`}
            </button>
          </>
        )}
        
        <form onSubmit={handleSubmit} style={{marginTop: "1rem"}}>
          <input name="_id" placeholder="Job ID" value={form._id} onChange={handleChange} required style={styles.inputStyle} />
          <input name="profile" placeholder="Job Profile (e.g., Frontend Developer)" value={form.profile} onChange={handleChange} required style={styles.inputStyle} />
          <textarea name="desc" placeholder="Job Description" value={form.desc} onChange={handleChange} required style={styles.textareaStyle} />
          <input name="exp" type="number" placeholder="Experience (years)" value={form.exp} onChange={handleChange} required style={styles.inputStyle} />
          <input name="techs" placeholder="Required Techs (comma separated)" value={form.techs} onChange={handleChange} required style={styles.inputStyle} />
          <button type="submit" style={styles.submitStyle} disabled={loading}>
            {loading ? "Submitting..." : "Post Job"}
          </button>
        </form>
      </div>
    </div>
  );
}

// --- Styles Object ---
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #f8f0ff, #e6f0ff)",
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  },
  formBox: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "450px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "1.5rem",
    color: "#5e35b1",
  },
  modeSelector: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  inputStyle: {
    boxSizing: "border-box",
    width: "100%",
    padding: "12px",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px"
  },
  textareaStyle: {
    boxSizing: "border-box",
    width: "100%",
    padding: "12px",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    height: "100px",
    resize: "vertical"
  },
  btnStyle: {
    width: "100%",
    marginBottom: "1rem",
    padding: "12px 20px",
    backgroundColor: "#7e57c2",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s",
  },
  activeBtn: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    backgroundColor: "#5e35b1",
    color: "white",
    margin: "0 5px"
  },
  inactiveBtn: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    backgroundColor: "#e0e0e0",
    color: "#333",
    margin: "0 5px"
  },
  submitStyle: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#5e35b1",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  message: {
    padding: '12px',
    marginBottom: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: '500',
  },
  success: {
    backgroundColor: '#d1f4e0',
    color: '#11814b',
  },
  error: {
    backgroundColor: '#fde2e1',
    color: '#b91c1c',
  },
  info: {
    backgroundColor: '#e0f7fa',
    color: '#006064',
  },
  walletInfo: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '1rem',
    wordBreak: 'break-all',
  }
};

export default PostJob;
