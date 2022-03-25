import './App.css';
import { useState } from 'react'

function App() {
   const tasks = ['Eat dinner', 'Do landuary', 'go to the gym']
  return (
   
    <div className="App">
      <h2 style={{color: 'white'}}>Todo LIST APP</h2>
      <input type="text" style={{outline: 'none'}} />
      <button>Add task</button>
      {tasks.map(task => (
        <h2>{task}</h2>
      ))}
    </div>
  );
}

export default App;
