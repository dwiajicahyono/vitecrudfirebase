/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// ItemForm.jsx

import React from 'react';
import Swal from 'sweetalert2'; 
import { Link } from 'react-router-dom';

const ItemForm = ({ 
  itemName, setItemName, 
  imageLink, setImageLink,
  quantity, setQuantity, 
  entryDate, setEntryDate,
  borrowedName, setBorrowedName, 
  outDate, setOutDate,
  itemsBorrowed, setItemBorrowed, 
  useFor, setUseFor, 
  handleAddItem 
}) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!itemName || !imageLink || !quantity || !entryDate || !borrowedName || !outDate || !itemsBorrowed || !useFor) {
      Swal.fire({
        icon: 'error',
        title: 'Kesalahan',
        text: 'Semua bidang harus diisi.',
      });
      return;
    }

    handleAddItem();
  };

  return (
    <>
      <h1>Tambah Item</h1>
      <form onSubmit={handleFormSubmit}>
          <div>
            <label>Nama Barang</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Link Gambar</label>
            <input
              type="text"
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Jumlah</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Tanggal Masuk</label>
            <input
              type="date"
              value={entryDate}
              onChange={(e) => setEntryDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Nama Peminjam</label>
            <input
              type="text"
              value={borrowedName}
              onChange={(e) => setBorrowedName(e.target.value)}
              required
              placeholder='isi "-" jika tidak ada yang meminjam'
            />
          </div>
          <div>
            <label>Tanggal Keluar</label>
            <p>isi tanggal masuk jika tidak ada yang meminjam</p>
            <input
              type="date"
              value={outDate}
              onChange={(e) => setOutDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Jumlah Dipinjam</label>
            <p>isi "0" jika tidak ada yang meminjam</p>
            <input
              type="number"
              value={itemsBorrowed}
              onChange={(e) => setItemBorrowed(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Keperluan</label>
            <textarea
              type="text"
              value={useFor}
              onChange={(e) => setUseFor(e.target.value)}
              required
              className=' w-5 h-20'
              placeholder='isi "-" jika tidak ada yang meminjam'
            />
          </div>
          <button type="submit">
              Tambah Item
          </button>
      </form>
    </>
  );
};

export default ItemForm;
