/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";
import ImageModal from "../components/Dashboard/ImageModal";

const Tester = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
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
        const itemData = doc.data(); // Get the data from the document
        fetchedItems.push({
          id: doc.id,
          namaBarang: itemData.namaBarang, // Make sure property names match
          linkGambar: itemData.linkGambar,
          jumlah: itemData.jumlah,
          tanggalMasuk: itemData.tanggalMasuk,
        });
      });

      setItems(fetchedItems);
    };

    fetchData();
  }, []);

  return (
    <div className="px-10">
      <h1>Tester</h1>
      <table className="striped-table ">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Gambar</th>
            <th>Jumlah Tersedia</th>
            <th>Tanggal Masuk</th>
          </tr>
        </thead>
        <tbody>
          {items ? (
            items.map((item, i) => (
              <tr key={item.id}>
                <td>{i + 1}.</td>
                <td>{item.namaBarang}</td>
                <td>
                  <div className="w-20">
                    <img
                      src={item.linkGambar}
                      alt="Modal Image"
                      className="cursor-pointer max-w-full"
                      onClick={() => openModal(item.linkGambar)}
                    />
                  </div>
                </td>
                <td>{item.jumlah}</td>
                <td>{item.tanggalMasuk}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No items available</td>
            </tr>
          )}
        </tbody>
      </table>
      {showModal && (
        <ImageModal imageUrl={selectedImageUrl} onClose={closeModal} />
      )}
    </div>
  );
};

export default Tester;
