import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'
import { nanoid } from 'nanoid'
import tailwindcss from '@tailwindcss/vite'



function App() {
    const randomImg = `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`;

  const [details, setdetails] = useState([
    {
      id:nanoid(),
      name:"YOGI",
      img:randomImg
    }
  ]);


  return (
    <>
    <Form details={details} setdetails={setdetails} />
    <Display details={details} setdetails={setdetails}/>
    </>
  )
}

export default App
