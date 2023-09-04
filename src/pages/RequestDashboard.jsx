/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PasswordRequest from '../components/Request/PasswordRequest'
import ShowRequest from '../components/Request/ShowRequest';
import ItemList from '../components/itemlisttest';

const RequestDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  
  return (
    <div>
    {isAuthenticated ? (
      <div className="mx-20 my-6">
      <h1 className='text-center'> Request Dashboard</h1>
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