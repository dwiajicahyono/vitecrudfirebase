/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firestore';
import { Link } from 'react-router-dom';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [quantity, setQuantity] = useState('');
  const [entryDate, setEntryDate] = useState('');

  const handleAddItem = async () => {
    try {
      const newItem = {
        "namaBarang": itemName,
        "linkGambar": imageLink,
        "jumlah": quantity,
        "tanggalMasuk": entryDate,
        // You can add more fields here
      };

      const docRef = await addDoc(collection(db, 'items'), newItem);
      console.log('Document written with ID: ', docRef.id);

      // Show success alert using SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Item added successfully',
        showConfirmButton: false,
        timer: 1500,
      });

      // Reset fields after successful addition
      setItemName('');
      setImageLink('');
      setQuantity('');
      setEntryDate('');
    } catch (error) {
      console.error('Error adding item: ', error);
      // Show error alert using SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while adding the item.',
      });
    }
  };

  return (
    <div className='px-9'>
      <h1>Add Item</h1>
      <form>
        <div>
          <label>Nama Barang</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div>
          <label>Link Gambar</label>
          <input
            type="text"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
          />
        </div>
        <div>
          <label>Jumlah</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <label>Tanggal Masuk</label>
          <input
            type="date"
            value={entryDate}
            onChange={(e) => setEntryDate(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
        <Link to="/tester">Back to List</Link>
      </form>
    </div>
  );
};

export default AddItem;
