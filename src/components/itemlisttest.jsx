/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";
import EditItemPopup from "./EditItemPopup"; 

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [search, setSearch] = useState("");
  const [itemsUpdated, setItemsUpdated] = useState(false);
  

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "items"));
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
  }, [itemsUpdated]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };
  const handleRefresh = async () => {
    setItemsUpdated(true);
    try {
      const querySnapshot = await getDocs(collection(db, "items"));
      const itemsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(itemsData);
    } catch (error) {
      console.error("Error fetching items: ", error);
    }
    setItemsUpdated(false);
  };

  return (
    <div>
      <div className="shadow-md bg-white rounded-lg h-fit">
        <div className="py-3 px-6 border-b border-dashed">
          <div className="flex justify-between items-center">
            <h4 className="flex text-lg font-semibold tracking-tight text-slate-900">
              Daftar Item Tersedia
              <span
              className=" cursor-pointer px-4 rounded"
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
                <path fill="#20c997" d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path>
              </svg>
            </span>
            </h4>
            
          </div>
          <div className="flex items-center w-96 flex-1 px-2 space-x-2">
          <span>
          <svg
            className="w-6 h-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
          <input
              type="text"
              placeholder="Cari Barang..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-2 border rounded-full"
            />
            </div>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                  <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Nama Barang
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Jumlah
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Peminjam
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Jumlah Dipinjam
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Tanggal
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Action
                  </th>
                </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {items.filter(item => item.namaBarang.toLowerCase().includes(search.toLowerCase())).map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">
                          {item.namaBarang}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                        {item.jumlah}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                        {item.namaPeminjam}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                        {item.jumlahDipinjam}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                        {item.tanggalKeluar}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                        <div onClick={() => handleItemClick(item)} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-white text-green-600 inline-block cursor-pointer">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-600 group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white">edit</span>
                    </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

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
