/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// PasswordCheck.jsx

import React from 'react';
import Swal from 'sweetalert2';

const PasswordRequest = ({ password, setPassword, onAuthenticate }) => {
  
  const handlePasswordCheck = (e) => {
    e.preventDefault(); // mencegah perilaku bawaan form

    if (password === import.meta.env.VITE_REACT_APP_SUPERREQUEST_PASSWORD) {
      Swal.fire({
        icon: 'success',
        title: 'Selamat Datang Admin Request',
        showConfirmButton: false,
        timer: 1500,
      });
      onAuthenticate(true);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Password Salah',
        text: 'Silakan masukkan password yang benar.',
      });
      onAuthenticate(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-200 items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 className="mb-4">Request Login</h1>
      <p className='text-gray-500 text-sm'>Masukkan password untuk mengakses Admin Request barang</p>
      <form onSubmit={handlePasswordCheck} className="flex items-center gap-4">
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password"
          className="border rounded py-2 px-3 flex-grow"
        />
        <button type="submit" className="bg-blue-500 hover:bg-red-500 hover:border-red-500 text-white font-bold py-2 px-4">
          Masuk
        </button>
      </form>
    </div>
  </div>
  );
};

export default PasswordRequest;
