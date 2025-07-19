import React, { useState, useEffect } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addBtn = () => {
    setTasks([...tasks, input]);
  }
  const renderTasks = () => {
    return tasks.map((task, index) => (
      <div key={index}>{task}</div>
    ));
  }

  return (
    <div>
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addBtn}>Add</button>
      <div className="tasks">
        {renderTasks()}
      </div>
    </div>
  )
}

export default App
