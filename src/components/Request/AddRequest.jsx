/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firestore'; // Pastikan Anda mengimpor konfigurasi Firebase Firestore Anda

const AddRequestForm = () => {
  const [namaBarang, setNamaBarang] = useState('');
  const [namaPeminjam, setNamaPeminjam] = useState('');
  const [keperluan, setKeperluan] = useState('');
  const [jumlahDipinjam, setJumlahDipinjam] = useState('');
  const [tanggalPeminjaman, setTanggalPeminjaman] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        namaBarang,
        namaPeminjam,
        keperluan,
        jumlahDipinjam,
        tanggalPeminjaman,
      };

      await addDoc(collection(db, 'requestitems'), requestData);

      Swal.fire({
        icon: 'success',
        title: 'Request berhasil ditambahkan!',
        showConfirmButton: false,
        timer: 1500,
      });

      // Reset form setelah berhasil submit
      setNamaBarang('');
      setNamaPeminjam('');
      setKeperluan('');
      setJumlahDipinjam('');
      setTanggalPeminjaman('');
    } catch (error) {
      console.error('Error adding request: ', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Terjadi kesalahan saat menambahkan request.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nama Barang:
        <input type="text" value={namaBarang} onChange={(e) => setNamaBarang(e.target.value)} required />
      </label>
      <label>
        Nama Peminjam:
        <input type="text" value={namaPeminjam} onChange={(e) => setNamaPeminjam(e.target.value)} required />
      </label>
      <label>
        Keperluan:
        <textarea type="text" value={keperluan} onChange={(e) => setKeperluan(e.target.value)} required className=' w-5 h-20'/>
      </label>
      <label>
        Jumlah Dipinjam:
        <input type="number" value={jumlahDipinjam} onChange={(e) => setJumlahDipinjam(e.target.value)} required />
      </label>
      <label>
        Tanggal Peminjaman:
        <input type="date" value={tanggalPeminjaman} onChange={(e) => setTanggalPeminjaman(e.target.value)} required />
      </label>
      <button type="submit">Tambah Request</button>
    </form>
  );
};

export default AddRequestForm;
