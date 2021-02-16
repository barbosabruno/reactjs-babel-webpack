import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';

function App() {

  const [projects, setProjects] = useState(['Mobile app', 'Front-end web']);

  function handleAddProject() {
    setProjects([...projects, `New project ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImage} alt="Background image" />
      
      <button type="button" onClick={handleAddProject}>Add project</button>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
    </>
  );
}

export default App;