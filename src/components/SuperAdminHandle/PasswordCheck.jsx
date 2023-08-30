/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// PasswordCheck.jsx

import React from 'react';
import Swal from 'sweetalert2';

const PasswordCheck = ({ password, setPassword, onAuthenticate }) => {
  
  const handlePasswordCheck = (e) => {
    e.preventDefault(); // mencegah perilaku bawaan form

    if (password === import.meta.env.VITE_REACT_APP_SUPERADMIN_PASSWORD) {
      Swal.fire({
        icon: 'success',
        title: 'Selamat Datang Admin tambah barang',
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
    <div>
      <h1>Masukkan password untuk mengakses Admin Tambah barang</h1>
      <form onSubmit={handlePasswordCheck}>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordCheck;
