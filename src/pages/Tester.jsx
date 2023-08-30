/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";
import ImageViewDashboard from "../components/ImageViewDashboard";
import SearchBox from "../components/SearchBox"; // Impor komponen SearchBox

const Tester = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // State untuk kata kunci pencarian

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

  return (
    <div className="px-10">
      <h1>Tester</h1>

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
