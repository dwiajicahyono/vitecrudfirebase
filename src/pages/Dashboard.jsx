/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AddItem from "../components/SuperAdminHandle/AddItem";
import ViewItem from "../components/SuperAdminHandle/ViewItem";
import PasswordCheck from "../components/SuperAdminHandle/PasswordCheck";
import { Link } from "react-router-dom";

const AddItempage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemsUpdated, setItemsUpdated] = useState(false);

  const handleItemAdded = () => {
    setItemsUpdated((prev) => !prev);
  };

  return (
    <div className="relative ">
      {isAuthenticated ? (
        <div className="mx-20">
          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
              <div
                className="bg-black opacity-50 absolute top-0 left-0 w-full h-full"
                onClick={() => setIsModalOpen(false)}
              ></div>
              <button
                className="absolute top-2 right-2"
                onClick={() => setIsModalOpen(false)}
              >
                X
              </button>
              <div className="bg-white p-8 w-3/4 max-w-xl rounded-lg shadow-md relative z-60 overflow-y-auto max-h-[92%] my-20 ">
                <AddItem onItemAdded={handleItemAdded} />
              </div>
            </div>
          )}
          <div className="px-9  justify-center items-center">
          <div className="text-center">
          <h3 className=" mt-10 text-green-900">Daftar Barang</h3>
          <button
          className="bg-green-500 border-green-500 hover:bg-blue-500 hover:border-blue-500 text-white py-4 px-7 rounded mt-4 mx-2"
          onClick={() => setIsModalOpen(true)}
        >
          Tambah Barang
        </button>
        <Link to='/'>
          <button
          className="bg-red-500 border-red-500 hover:bg-blue-500 hover:border-blue-500 text-white py-4 px-7 rounded mt-4 mx-2"
        >
          Keluar
        </button></Link>
          </div>
            
           
           
            <hr className="my-6 border-gray-500"/>

          </div>
          <ViewItem itemsUpdated={itemsUpdated} />
        </div>
      ) : (
        <PasswordCheck
          password={password}
          setPassword={setPassword}
          onAuthenticate={setIsAuthenticated}
        />
      )}
    </div>
  );
};

export default AddItempage;
