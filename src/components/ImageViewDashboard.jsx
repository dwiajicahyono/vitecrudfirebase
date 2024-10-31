/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';

import Modal from './SuperAdminHandle/Modal';

function ImageViewDashboard({ imageUrl, onClose,  item}) {
   const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowDetail = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setShowPopup(false);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <img src={imageUrl} alt="Modal Image" className="w-96" />
       <h5 className='text-left'>Keterangan Peminjaman</h5>
        <p className=' text-left'>Nama Barang: {item.namaBarang}</p>
        <p className=' text-left'>Jumlah Dipinjam: {item.jumlahDipinjam}</p>
        <p className=' text-left'>Tanggal Keluar: {item.tanggalKeluar}</p>
        <p className=' text-left'>Peminjam: {item.namaPeminjam}</p>
        <p className=' text-left'>Keterangan : <span onClick={() => handleShowDetail(item)}
              className="text-blue-500 cursor-pointer hover:text-red-500">Detail </span></p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
          Close
        </button>
      </div>
      {showPopup && <Modal item={selectedItem} onClose={handleCloseModal} />}
    </div>
  );
}

export default ImageViewDashboard;


