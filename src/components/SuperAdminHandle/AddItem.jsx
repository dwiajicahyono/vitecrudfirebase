/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firestore';
import ItemForm from './ItemForm';

const AddItem = ({ onItemAdded }) => {
  const [itemName, setItemName] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [quantity, setQuantity] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [useFor, setUseFor] = useState('');
  const [itemsBorrowed, setItemBorrowed] = useState('');
  const [borrowedName, setBorrowedName] = useState('');
  const [outDate, setOutDate] = useState('');

  const handleAddItem = async () => {
    try {
      const newItem = {
        "namaBarang": itemName,
        "linkGambar": imageLink,
        "jumlah": quantity,
        "tanggalMasuk": entryDate,
        "digunakanUntuk": useFor,
        "jumlahDipinjam": itemsBorrowed,
        "namaPeminjam": borrowedName,
        "tanggalKeluar": outDate,
      };

      const docRef = await addDoc(collection(db, 'items'), newItem);

      Swal.fire({
        icon: 'success',
        title: 'Item berhasil ditambahkan',
        showConfirmButton: false,
        timer: 1500,
      });

      onItemAdded();

      setItemName('');
      setImageLink('');
      setQuantity('');
      setEntryDate('');
      setUseFor('');
      setItemBorrowed('');
      setBorrowedName('');
      setOutDate('');
    } catch (error) {
      console.error('Error adding item: ', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Terjadi kesalahan saat menambahkan item.',
      });
    }
  };

  return (
    <div className='px-9'>
      <ItemForm
          itemName={itemName} setItemName={setItemName}
          imageLink={imageLink} setImageLink={setImageLink}
          quantity={quantity} setQuantity={setQuantity}
          entryDate={entryDate} setEntryDate={setEntryDate}
          useFor={useFor} setUseFor={setUseFor}
          itemsBorrowed={itemsBorrowed} setItemBorrowed={setItemBorrowed}
          borrowedName={borrowedName} setBorrowedName={setBorrowedName}
          outDate={outDate} setOutDate={setOutDate}
          handleAddItem={handleAddItem}
        />
        
    </div>
  );
};

export default AddItem;
