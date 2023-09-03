import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";
import EditItemPopup from "./EditItemPopup"; 

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [search, setSearch] = useState("");

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
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  return (
    <div>
      <h1>Daftar Item</h1>
      <div className="shadow-md bg-white rounded-lg h-fit">
        <div className="py-3 px-6 border-b border-dashed">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold tracking-tight text-slate-900">
              Daftar Item Tersedia
            </h4>
            
          </div>
          <input
              type="text"
              placeholder="Cari Barang..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-2 border rounded-full"
            />
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
