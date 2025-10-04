import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar/>
        </header>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
