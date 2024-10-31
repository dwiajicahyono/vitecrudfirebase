/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by Nama Barang..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="mb-4 p-2 border rounded"
    />
  );
};

export default SearchBox;
