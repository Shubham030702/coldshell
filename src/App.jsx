import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
      <header>
      <Navbar/>
      </header>
      </BrowserRouter>
    </>
  )
}

export default App
