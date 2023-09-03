/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

import About from './pages/About';
import Tester from './pages/Tester';
import AddItempage from './pages/Dashboard';
import ItemList from './components/itemlisttest';
import ShowRequest from './components/Request/ShowRequest';



const App = () => {
  return (
    <BrowserRouter>
      <div>

  
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/showreq' element={<ShowRequest />} />
          <Route path='/dashboard' element={<AddItempage />} />
          <Route path='/tester' element={<Tester />} />
          <Route path='/about' element={<About />} />
          <Route path='/iteml' element={<ItemList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App