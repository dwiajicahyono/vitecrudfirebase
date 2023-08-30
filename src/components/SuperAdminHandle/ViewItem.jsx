import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { db } from '../../config/firestore';
import EditItem from './Edititem';

const ViewItem = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [itemsUpdated, setItemsUpdated] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'items'));
      const itemsList = [];
      querySnapshot.forEach((doc) => {
        itemsList.push({ id: doc.id, ...doc.data() });
      });
      setItems(itemsList);
    };
    fetchItems();
  }, [itemsUpdated]);

 const handleDeleteItem = async (id) => {
    try {
      await deleteDoc(doc(db, 'items', id));
      const newItemsList = items.filter(item => item.id !== id);
      setItems(newItemsList);

      Swal.fire({
        icon: 'success',
        title: 'Item berhasil dihapus',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error('Error deleting item: ', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Terjadi kesalahan saat menghapus item.',
      });
    }
  };
  const handleEditClick = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  const filteredItems = searchTerm
    ? items.filter(item => item.namaBarang.toLowerCase().includes(searchTerm.toLowerCase()))
    : items;

  return (
    <div className="px-9">
     
    
      <input 
        type="text" 
        placeholder="Cari barang..." 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
        className="border p-2 mb-4 rounded"
      />
      
       <table>
        <thead>
          <tr>
            <th>Nama Barang</th>
            <th>Link Gambar</th>
            <th>Jumlah</th>
            <th>Tanggal Masuk</th>
            <th>Digunakan Untuk</th>
            <th>Jumlah Dipinjam</th>
            <th>Nama Peminjam</th>
            <th>Tanggal Keluar</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <tr key={item.id}>
                <td>{item.namaBarang}</td>
                <td><img src={item.linkGambar} alt={item.namaBarang} width="50" height="50" /></td>
                <td>{item.jumlah}</td>
                <td>{item.tanggalMasuk}</td>
                <td>{item.digunakanUntuk}</td>
                <td>{item.jumlahDipinjam}</td>
                <td>{item.namaPeminjam}</td>
                <td>{item.tanggalKeluar}</td>
                <td>
                  <button onClick={() => handleEditClick(item)} className=' m-2'>Edit</button>
                  <button onClick={() => handleDeleteItem(item.id)} className=' m-2'>Hapus</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">Nama barang tidak tersedia</td>
            </tr>
          )}
        </tbody>
      </table>
      {isEditing && 
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full" onClick={() => setIsEditing(false)}></div>
          <button 
            className="absolute top-2 right-2" 
            onClick={() => setIsEditing(false)}>
            X
          </button>
          <div className="bg-white p-8 w-3/4 max-w-xl rounded-lg shadow-md relative z-60 overflow-y-auto max-h-[92%] my-20">
            <EditItem currentItem={currentItem} setIsEditing={setIsEditing} setItemsUpdated={setItemsUpdated} />
          </div>
        </div>
      }
    </div>
  );
};

export default ViewItem;