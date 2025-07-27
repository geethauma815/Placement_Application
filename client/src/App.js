import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import JobList from "./components/JobList";
import PostJob from "./components/PostJob";
import JobSearch from "./components/JobSearch";
import ExtractSkills from "./components/ExtractSkills";
import MatchScore from "./components/MatchScore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/search-job" element={<JobSearch />} /> 
        <Route path="/ai-extract" element={<ExtractSkills />} />
        <Route path="/match-score" element={<MatchScore />} />


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
