import { useEffect, useState } from 'react'
import './App.css'

function App() {

const getRandomValue = () => { return Math.floor(Math.random() * 256);}
const [r, setr] = useState(getRandomValue());
const [g, setg] = useState(getRandomValue());
const [b, setb] = useState(getRandomValue());


  const changeHandler = ()=>{
  setr(getRandomValue());
  setg(getRandomValue());
  setb(getRandomValue());
  }
useEffect(() => {
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}, [r, g, b]);


  return (
    <>
    <div className='cont'>
      <h1>rgb({r},{g},{b})</h1>
      <button onClick={changeHandler}>Change color</button>
    </div>
    </>
  )
}

export default App
