/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

import Logout from '../Logout/Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>Software Inventory Lab</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)} className='bg-blue-500 hover:bg-red-500'>Tambah Barang</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
