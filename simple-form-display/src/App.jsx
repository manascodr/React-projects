import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'
import { nanoid } from 'nanoid'


function App() {
  const [details, setdetails] = useState([
    {
      id:nanoid(),
      name:"YOGI"
    }
  ]);


  return (
    <>
    <Form details={details} setdetails={setdetails}/>
    <Display details={details} setdetails={setdetails}/>
    </>
  )
}

export default App
