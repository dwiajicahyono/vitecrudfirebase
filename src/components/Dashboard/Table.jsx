import React, { useState } from "react";
import ImageModal from "./ImageModal";

const Table = ({ employees, handleEdit, handleDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Gambar</th>
            <th>Jumlah</th>
            <th>Tanggal</th>
            <th>Peminjam</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}.</td>
                <td>{employee.firstName}</td>
                <td>
                  <div className="w-20">
                    <img
                      src={employee.email}
                      alt="Modal Image"
                      className="cursor-pointer max-w-full"
                      onClick={() => openModal(employee.email)}
                    />
                  </div>
                </td>
                <td>{employee.salary}</td>
                <td>{employee.date}</td>
                <td>{employee.lastName}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button hover:bg-red-500 hover:text-white"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}></td>
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

export default Table;
