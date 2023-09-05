/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { db } from '../../config/firestore';

const EditItem = (props) => {
    const [updatedItem, setUpdatedItem] = useState(props.currentItem);

    const handleUpdateItem = async (e) => {
        e.preventDefault();

        try {
            const docRef = doc(db, 'items', updatedItem.id);
            await updateDoc(docRef, updatedItem);

            Swal.fire({
                icon: 'success',
                title: 'Item berhasil diperbarui',
                showConfirmButton: false,
                timer: 1500,
            });

            props.setIsEditing(false);
            props.setItemsUpdated(prev => !prev); // Update the items
        } catch (error) {
            console.error('Error updating item: ', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Terjadi kesalahan saat memperbarui item.',
            });
        }
    };

    return (
        <div>
            <h2>Edit Item</h2>
            <form onSubmit={handleUpdateItem}>
                <div>
                    <label>Nama Barang</label>
                    <input
                      type="text"
                      value={updatedItem.namaBarang}
                      onChange={e => setUpdatedItem({ ...updatedItem, namaBarang: e.target.value })} 
                      required
                    />
                </div>
                <div>
                    <label>linkGambar</label>
                    <input
                      type="text"
                      value={updatedItem.linkGambar}
                      onChange={e => setUpdatedItem({ ...updatedItem, linkGambar: e.target.value })} 
                      required
                    />
                </div>
                <div>
                    <label>jumlah</label>
                    <input
                      type="number"
                      value={updatedItem.jumlah}
                      onChange={e => setUpdatedItem({ ...updatedItem, jumlah: e.target.value })} 
                      required
                    />
                </div>
                <div>
                    <label>tanggal Masuk</label>
                    <input
                      type="date"
                      value={updatedItem.tanggalMasuk}
                      onChange={e => setUpdatedItem({ ...updatedItem, tanggalMasuk: e.target.value })} 
                      required
                    />
                </div>
                <div>
                    <label>Nama Peminjam</label>
                    <input
                      type="text"
                      value={updatedItem.namaPeminjam}
                      onChange={e => setUpdatedItem({ ...updatedItem, namaPeminjam: e.target.value })} 
                      required
                    />
                </div>
                <div>
                <label>tanggal Keluar</label>
                <input
                  type="date"
                  value={updatedItem.tanggalKeluar}
                  onChange={e => setUpdatedItem({ ...updatedItem, tanggalMasuk: e.target.value })} 
                  required
                />
            </div>
            <div>
                    <label>Jumlah Dipinjam</label>
                    <input
                      type="number"
                      value={updatedItem.jumlahDipinjam}
                      onChange={e => setUpdatedItem({ ...updatedItem, jumlahDipinjam: e.target.value })} 
                      required
                    />
                </div>
            <div>
                    <label>Digunakan Untuk</label>
                    <input
                      type="text"
                      value={updatedItem.digunakanUntuk}
                      onChange={e => setUpdatedItem({ ...updatedItem, digunakanUntuk: e.target.value })} 
                      required
                    />
                </div>
                {/*tambah sini */}
                <button type="submit" className='m-2'>Simpan Perubahan</button>
            </form>
        </div>
    );
};

export default EditItem;