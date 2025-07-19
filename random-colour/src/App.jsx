import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [r, setr] = useState(0)
  const [g, setg] = useState(0)
  const [b, setb] = useState(0)

  const changeHandler = ()=>{

   setr(()=>Math.floor(Math.random()*256))
   setg(()=>Math.floor(Math.random()*256))
   setb(()=>Math.floor(Math.random()*256))
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
