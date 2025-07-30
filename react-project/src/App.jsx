import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header, {valuex} from './header.jsx'

function App() {
  
  const abc = "hello";
  return (
    <>
    <App2/>
      <h1>hello react app is running</h1>
      <h1>{valuex}</h1>
      <h1>{abc}</h1>
    </>
  )
}


function App2(){
  return(
    <>
    <h1>hello react app is runnin2g</h1>
    </>
  )
}

export default App

