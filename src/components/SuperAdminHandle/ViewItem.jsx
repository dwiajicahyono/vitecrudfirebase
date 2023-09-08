/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../config/firestore";
import EditItem from "./Edititem";
import Modal from "./Modal";

const ViewItem = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [itemsUpdated, setItemsUpdated] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
      const querySnapshot = await getDocs(collection(db, "items"));
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
      await deleteDoc(doc(db, "items", id));
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
  };
  const handleEditClick = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  const filteredItems = searchTerm
    ? items.filter((item) =>
        item.namaBarang.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : items;

  const handleRefresh = () => {
    setItemsUpdated((prev) => !prev);
  };

  return (
    <div className="px-4 md:px-9">
      <div className="flex flex-wrap items-center px-2 space-x-2 mb-4 w-full md:w-96">
      <div className=" flex-row  py-3 px-4 rounded gap-2">Refresh <span
      className=" cursor-pointer fill-green-500 hover:fill-red-500"
      onClick={handleRefresh}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0 0 30 30"
        className=""
      >
        <path  d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path>
      </svg>
    </span></div>
        
        
        <input
          type="text"
          placeholder="🔍 Cari barang..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 px-4 py-3 text-gray-600 rounded-md focus:bg-gray-100 focus:outline-none"
        />
      </div>

      <table className="w-full table-auto md:table-fixed">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">No.</th> {/* Tambahkan kolom "No" */}
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Nama Barang</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Link Gambar</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Jumlah</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Tanggal Masuk</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Digunakan Untuk</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Jumlah Dipinjam</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Nama Peminjam</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Tanggal Keluar</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map(
              (
                item,
                index // Tambahkan parameter `index`
              ) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">{index + 1}.</td>{" "}
                  {/* Tampilkan nomor urut */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">{item.namaBarang}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">
                    <img
                      src={item.linkGambar}
                      alt={item.namaBarang}
                      width="50"
                      height="50"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">{item.jumlah}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">{item.tanggalMasuk}</td>
                  <td
              onClick={() => handleShowDetail(item)}
              className="text-center cursor-pointer hover:text-blue-500 text-green-500"
            >
              detail
            </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">{item.jumlahDipinjam}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">{item.namaPeminjam}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">{item.tanggalKeluar}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">
                    <button
                      onClick={() => handleEditClick(item)}
                      className="px-2 py-1 m-1 whitespace-nowrap text-sm font-medium text-center"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="px-2 py-1 m-1 whitespace-nowrap text-sm font-medium text-center"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan="10" className="text-center">
                Nama barang tidak tersedia
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {isEditing && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div
          className="bg-black opacity-50 absolute top-0 left-0 w-full h-full"
            onClick={() => setIsEditing(false)}
          ></div>
          <button
          className="absolute top-2 right-2 z-60"
            onClick={() => setIsEditing(false)}
          >
            X
          </button>
          <div className="bg-white p-4 md:p-8 w-11/12 md:w-3/4 max-w-xl rounded-lg shadow-md relative z-60 overflow-y-auto max-h-[92%] my-4 md:my-20">
            <EditItem
              currentItem={currentItem}
              setIsEditing={setIsEditing}
              setItemsUpdated={setItemsUpdated}
            />
          </div>
        </div>
      )}
      {showPopup && <Modal item={selectedItem} onClose={handleCloseModal} />}
    </div>
  );
};

export default ViewItem;
