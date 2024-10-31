/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PasswordRequest from '../components/Request/PasswordRequest'
import ShowRequest from '../components/Request/ShowRequest';
import ItemList from '../components/itemlisttest';
import { Link } from 'react-router-dom';

const RequestDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  
  return (
    <div>
    {isAuthenticated ? (
      <div className="mx-20 my-6">
      <h1 className='text-center'> Request Dashboard</h1>
      <Link to='/' className='flex flex-col items-end justify-end'>
          <button
          className=" bg-red-500 border-red-500 hover:bg-blue-500 hover:border-blue-500 text-white py-4 px-7 rounded mt-4 mx-2"
        >
          Keluar
        </button></Link>
      <ShowRequest/>
      <ItemList/>
      </div>
    ) : (
      <PasswordRequest
        password={password}
        setPassword={setPassword}
        onAuthenticate={setIsAuthenticated}
      />
    )}
    </div>
  )
}

export default RequestDashboard