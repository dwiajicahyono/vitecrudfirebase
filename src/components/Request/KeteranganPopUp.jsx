/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function KeteranganPopUp({ onClose,  item, keperluan}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <p>Keterangan: {item.keperluan}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default KeteranganPopUp;


