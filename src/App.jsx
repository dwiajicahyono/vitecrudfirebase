/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ListBarang from './pages/ListBarang';
import About from './pages/About';
import AddItempage from './pages/Dashboard';
import RequestDashboard from './pages/RequestDashboard';



const App = () => {
  return (
    <BrowserRouter>
      <div>

  
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/list' element={<ListBarang />} />
          <Route path='/request' element={<RequestDashboard />} />
          <Route path='/dashboard' element={<AddItempage />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App