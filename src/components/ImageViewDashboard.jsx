/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function ImageViewDashboard({ imageUrl, onClose,  item}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <img src={imageUrl} alt="Modal Image" className="w-96" />
       <h5 className='text-center'>Keterangan Peminjaman</h5>
        <p>Nama Barang: {item.namaBarang}</p>
        <p>Jumlah Dipinjam: {item.jumlahDipinjam}</p>
        <p>Tanggal Keluar: {item.tanggalKeluar}</p>
        <p>Peminjam: {item.namaPeminjam}</p>
        <p>Keterangan: {item.digunakanUntuk}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ImageViewDashboard;


