import React from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DeveloperSetup from './components/DeveloperSetup';

function App() {
  return (
    <div className="App">
      <BasicInfo />
      <Work />
      <Skills />
      <Resources />
      <DeveloperSetup />
    </div>
  );
}

export default App;