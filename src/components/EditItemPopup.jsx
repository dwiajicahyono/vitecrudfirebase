/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// EditItemPopup.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firestore';

const EditItemPopup = ({ item, onClose }) => {
   const [itemName, setItemName] = useState(item.namaBarang);
   const [imageLink, setImageLink] = useState(item.linkGambar);
   const [quantity, setQuantity] = useState(item.jumlah);
   const [useFor, setUseFor] = useState(item.digunakanUntuk);
   const [itemsBorrowed, setItemBorrowed] = useState(item.jumlahDipinjam);
   const [borrowedName, setBorrowedName] = useState(item.namaPeminjam);
   const [outDate, setOutDate] = useState(item.tanggalKeluar);

  const handleEditItem = async () => {
    try {
      const itemRef = doc(db, 'items', item.id);

      await updateDoc(itemRef, {
        "namaBarang": itemName,
         "jumlah": quantity,
        "digunakanUntuk": useFor,
        "jumlahDipinjam": itemsBorrowed,
        "namaPeminjam": borrowedName,
        "tanggalKeluar": outDate,
      });

      Swal.fire({
        icon: 'success',
        title: 'Item berhasil diperbarui',
        showConfirmButton: false,
        timer: 1500,
      });

      onClose();

    } catch (error) {
      console.error('Error updating item: ', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Terjadi kesalahan saat memperbarui item.',
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-8 w-1/2">
        <h2 className="text-xl font-semibold mb-4">Edit Item</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nama Barang</label>
            <p>{itemName}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Jumlah Barang</label>
            <input 
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nama Peminjam</label>
            <input 
              type="text"
              value={borrowedName}
              onChange={(e) => setBorrowedName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Jumlah Dipinjam</label>
            <input 
              type="number"
              value={itemsBorrowed}
              onChange={(e) => setItemBorrowed(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">tanggal Keluar</label>
            <input 
              type="date"
              value={outDate}
              onChange={(e) => setOutDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">keterangan</label>
            <textarea 
              type="text"
              value={useFor}
              onChange={(e) => setUseFor(e.target.value)}
              placeholder='Digunakan untuk'
              className="w-5 h-20 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
         
          {/* ... (Kode untuk input lainnya) */}
          <div className="flex justify-between">
            <button 
              type="button" 
              onClick={handleEditItem} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Perbarui Item
            </button>
            <button 
              type="button" 
              onClick={onClose} 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItemPopup;
