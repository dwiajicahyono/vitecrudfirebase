import React, { useState } from "react";
import AddItem from "../components/SuperAdminHandle/AddItem";
import ViewItem from "../components/SuperAdminHandle/ViewItem";
import PasswordCheck from "../components/SuperAdminHandle/PasswordCheck";

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
        <>
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
            <h3>Tambah Item</h3>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 "
              onClick={() => setIsModalOpen(true)}
            >
              Add Item
            </button>
            <h3>Daftar Item</h3>
          </div>
          <ViewItem itemsUpdated={itemsUpdated} />
        </>
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
