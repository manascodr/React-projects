import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [count, setcount] = useState(0)
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setcount(count+1)}>increase</button>
    </div>
  )
}

export default App
