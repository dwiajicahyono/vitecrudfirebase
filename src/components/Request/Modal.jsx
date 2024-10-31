/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-xl w-1/2">
        <h2 className="text-xl mb-2">Keterangan</h2>
        <p className=' text-justify'> {item.keperluan}</p>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white p-2 rounded">Tutup</button>
      </div>
    </div>
  );
}

export default Modal;
