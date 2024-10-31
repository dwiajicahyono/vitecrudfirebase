/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firestore";

import Swal from "sweetalert2";
import Modal from "./Modal";

const ShowRequest = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);


  const handleShowDetail = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setShowPopup(false);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "requestitems"));
        const itemsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemsData);
      } catch (error) {
        console.error("Error fetching items: ", error);
      }
    };

    fetchItems();
  }, []);



  const handleDeleteItem = async (id) => {
    Swal.fire({
        title: 'Apakah Anda yakin?',
        text: "Anda tidak akan dapat mengembalikannya!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: `<span style="margin: 100px;">Ya, hapus!</span>`,
        cancelButtonText: `<span style="margin-right: 10px;">Tidak</span>`
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await deleteDoc(doc(db, "requestitems", id));
                const newItemsList = items.filter((item) => item.id !== id);
                setItems(newItemsList);

                Swal.fire({
                    icon: "success",
                    title: "Item berhasil dihapus",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } catch (error) {
                console.error("Error deleting item: ", error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Terjadi kesalahan saat menghapus item.",
                });
            }
        }
    });
};

  return (
    <div>
  <h2>Request Item
 
  </h2>
  {items.filter(item => item.id !== "1").length > 0 ? (
    <table>
      <thead>
        <tr>
          <th className="text-center">Nama Barang</th>
          <th className="text-center">Nama Peminjam</th>
          <th className="text-center">Digunakan Untuk</th>
          <th className="text-center">Jumlah Dipinjam</th>
          <th className="text-center">Tanggal Keluar</th>
          <th className="text-center">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {items.filter(item => item.id !== "1").map((item) => (
          <tr key={item.id} className="text-center">
            <td className="text-center">{item.namaBarang}</td>
            <td className="text-center">{item.namaPeminjam}</td>
            <td
              onClick={() => handleShowDetail(item)}
              className="text-center cursor-pointer hover:text-blue-500"
            >
              Detail
            </td>
            <td className="text-center">{item.jumlahDipinjam}</td>
            <td className="text-center">{item.tanggalPeminjaman}</td>
            <td className="text-center">
              <button
                onClick={() => handleDeleteItem(item.id)}
              
                className="mx-4"
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p className="text-center mt-4 text-xl font-semibold">
      Tidak ada request yang tersedia
    </p>
  )}
  {showPopup && <Modal item={selectedItem} onClose={handleCloseModal} />}
</div>

  );
};

export default ShowRequest;
