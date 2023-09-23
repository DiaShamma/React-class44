// App.js
import React from 'react';
import './App.css';
import PersonController from './component/PersonController.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Person Generator</h1>
      </header>
      <main>
        <PersonController /> {/* Render the PersonController component */}
      </main>
    </div>
  );
}

export default App;
