/* eslint-disable no-unused-vars */
import React from 'react'
import Admin from './components/App/admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Register from './components/Register/Register';
import About from './pages/About';


const App = () => {
  return (
    <BrowserRouter>
      <div>

  
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/admin' element={<Admin />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App