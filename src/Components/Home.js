import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>CBC eLearning Platform</h1>
      <p>Select a section to explore:</p>
      <button onClick={() => navigate("/audio")}>Audio Lessons</button>
      <button onClick={() => navigate("/student-progress")}>Student Progress</button>
      <button onClick={() => navigate("/teacher-view")}>Teacher Dashboard</button>
      <button onClick={() => navigate("/parent-summary")}>Parent Summary</button>
    </div>
  );
}

export default Home;
