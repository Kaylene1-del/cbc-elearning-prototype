import React from "react";
import "../style.css";

const StudentProgress = () => {
  const sampleData = {
    name: "Amina N.",
    grade: "Grade 6",
    subjects: [
      { subject: "Math", progress: 75 },
      { subject: "Science", progress: 62 },
      { subject: "English", progress: 88 },
    ],
  };

  return (
    <div className="dashboard">
      <h2>Student Progress</h2>
      <p><strong>Name:</strong> {sampleData.name}</p>
      <p><strong>Class:</strong> {sampleData.grade}</p>
      <ul>
        {sampleData.subjects.map((item, index) => (
          <li key={index}>
            {item.subject}: {item.progress}% complete
            <div className="progress-bar">
              <div className="progress" style={{ width: `${item.progress}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentProgress;
