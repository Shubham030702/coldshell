import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar/>
        </header>
        <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        </main>
      <footer>
      <Footer/>
      </footer>
      </BrowserRouter>
    </>
  )
}

export default App
