import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import Mathematics from './Mathematics';
import English from './English';
import Kiswahili from './Kiswahili';
import Science from './Science';
import Audio from './Audio';
import StudentProgress from './StudentProgress';
import TeacherView from './TeacherView';
import ParentSummary from './ParentSummary';

function App() {
  return (
    <div className="app">
      <h1>CBC eLearning Platform</h1>
      <p>Offline-capable education for rural learners</p>

      <h2>Subjects</h2>
      <div>
        <Link to="/mathematics"><button>Mathematics</button></Link>
        <Link to="/english"><button>English</button></Link>
        <Link to="/kiswahili"><button>Kiswahili</button></Link>
        <Link to="/science"><button>Science & Tech</button></Link>
      </div>

      <h2>Audio Lessons</h2>
      <div>
        <Link to="/audio"><button>Play Latest Audio</button></Link>
      </div>

      <h2>Dashboards</h2>
      <div>
        <Link to="/student"><button>Student Progress</button></Link>
        <Link to="/teacher"><button>Teacher View</button></Link>
        <Link to="/parent"><button>Parent Summary</button></Link>
      </div>

      <footer>
        <p>Prototype v1 – Powered by EduTech Pioneers</p>
      </footer>

      {/* Routing Logic */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mathematics" element={<Mathematics />} />
        <Route path="/english" element={<English />} />
        <Route path="/kiswahili" element={<Kiswahili />} />
        <Route path="/science" element={<Science />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/student" element={<StudentProgress />} />
        <Route path="/teacher" element={<TeacherView />} />
        <Route path="/parent" element={<ParentSummary />} />
      </Routes>
    </div>
  );
}

export default App;
