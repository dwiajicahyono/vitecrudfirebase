/* eslint-disable no-unused-vars */
// ItemList.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firestore';
import EditItemPopup from './EditItemPopup';  // Komponen ini akan kita buat selanjutnya

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const itemsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching items: ', error);
      }
    };

    fetchItems();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  return (
    <div>
      <h1>Daftar Item</h1>
      <ul>
        {items.map(item => (
          
          <li key={item.id}  >
          <p className=' cursor-pointer hover:text-blue-500'> {item.namaBarang}</p>
         
           <button onClick={() => handleItemClick(item)}>Tambah Request</button>
          </li>
        ))}
      </ul>

      {showPopup && selectedItem && (
        <EditItemPopup
          item={selectedItem}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default ItemList;
