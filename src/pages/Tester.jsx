/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";
import ImageViewDashboard from "../components/ImageViewDashboard";
import SearchBox from "../components/SearchBox"; // Impor komponen SearchBox
import AddRequestForm from "../components/Request/AddRequest";

const Tester = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // State untuk kata kunci pencarian
  const [showAddRequestModal, setShowAddRequestModal] = useState(false);


  const openModal = (item) => {
    setSelectedItem(item);
    setSelectedImageUrl(item.linkGambar);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      const fetchedItems = [];
      querySnapshot.forEach((doc) => {
        const itemData = doc.data();
        fetchedItems.push({
          id: doc.id,
          namaBarang: itemData.namaBarang,
          linkGambar: itemData.linkGambar,
          jumlah: itemData.jumlah,
          tanggalMasuk: itemData.tanggalMasuk,
          namaPeminjam: itemData.namaPeminjam,
        });
      });
      setItems(fetchedItems);
    };
    fetchData();
  }, []);

  const filteredItems = items.filter(item =>
    item.namaBarang.toLowerCase().includes(searchTerm.toLowerCase())
  ); // fungsi cari
  const openAddRequestModal = () => {
    setShowAddRequestModal(true);
  };
  
  const closeAddRequestModal = () => {
    setShowAddRequestModal(false);
  };
  

  return (
    <div className="px-10">
    {showAddRequestModal && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div
          className="bg-black opacity-50 absolute top-0 left-0 w-full h-full"
          onClick={closeAddRequestModal}
        ></div>
        <div className="bg-white p-8 w-3/4 max-w-xl rounded-lg shadow-md relative z-60 overflow-y-auto max-h-[92%] my-20 ">
          <AddRequestForm />
          <button className="absolute top-2 right-2" onClick={closeAddRequestModal}>
            X
          </button>
        </div>
      </div>
    )}
    
      <h1>Tester</h1>
      <button
  className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
  onClick={openAddRequestModal}
>
  Request Barang
</button>


      {/* Menggunakan Komponen SearchBox */}
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <table className="striped-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Gambar</th>
            <th>Jumlah Tersedia</th>
            <th>Tanggal Masuk</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, i) => (
              <tr key={item.id}>
                <td>{i + 1}.</td>
                <td>{item.namaBarang}</td>
                <td>
                  <div className="w-20">
                    <img
                      src={item.linkGambar}
                      alt="Modal Image"
                    />
                  </div>
                </td>
                <td>{item.jumlah}</td>
                <td>{item.tanggalMasuk}</td>
                <td>
                  <button onClick={() => openModal(item)}>View</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No items available</td>
            </tr>
          )}
        </tbody>
      </table>
      {showModal && (
        <ImageViewDashboard 
          imageUrl={selectedImageUrl} 
          onClose={closeModal} 
          item={selectedItem}
        />
      )}
    </div>
  );
};

export default Tester;
