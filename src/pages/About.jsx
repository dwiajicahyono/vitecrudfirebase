/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import ReactPlayer from 'react-player/youtube';
import Footer from "../components/Footer";

const about = () => {
  return (
    <div>
      <Header />
      <section className="flex-col items-center pt-24 px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <h1>About</h1>
        <p className=" text-justify text-xl">
          Selamat datang di Inventory Lab Telekomunikasi! Saya, Dwi Aji Cahyono,
          dengan gembira mengundang Anda untuk menjelajahi dan memanfaatkan
          platform ini. Inventory Lab ini adalah sarana yang kami persembahkan
          khusus untuk Anda, para mahasiswa dan pengguna lab, yang berkecimpung
          dalam dunia telekomunikasi. Kami memahami betapa pentingnya manajemen
          inventaris dalam kegiatan laboratorium. Oleh karena itu, Inventory Lab
          hadir sebagai solusi yang memudahkan Anda dalam mengelola dan melacak
          peralatan dan barang-barang berharga di dalam lab. Dengan antarmuka
          yang ramah pengguna, Anda dapat dengan mudah melakukan registrasi
          sebagai anggota lab dan masuk ke akun Anda. Kami percaya bahwa akses
          yang mudah dan informasi yang teratur adalah kunci sukses dalam setiap
          aktivitas laboratorium. Melalui Inventory Lab, Anda dapat mendaftar
          sebagai anggota baru dengan cepat dan efisien melalui halaman
          registrasi yang disediakan. Selain itu, kami juga menyediakan halaman
          login yang aman untuk memastikan bahwa data Anda tetap terlindungi.
          Untuk membantu Anda memahami cara penggunaan platform kami, kami juga
          menyertakan video penjelasan yang memberikan panduan langkah demi
          langkah. Dengan ini, Anda akan lebih siap dan percaya diri dalam
          memanfaatkan semua fitur yang kami tawarkan. Kami berharap bahwa
          Inventory Lab Telekomunikasi dapat membawa manfaat yang besar bagi
          perjalanan akademis Anda di dunia telekomunikasi. Selamat menggunakan
          platform kami, dan jangan ragu untuk memberikan masukan atau
          pertanyaan yang Anda miliki. Kami siap memberikan dukungan penuh untuk
          memastikan pengalaman Anda yang terbaik. Salam hangat, Dwi Aji Cahyono
        </p>

        <h1 className="pt-20 pb-6">Cara Menggunakan Website</h1>
  
        <ReactPlayer url='https://youtu.be/nSYdjyEWpl0' controls className='mb-60' alt='Thumbnail' width="100%" height="720px"
        />
      </section>
      <Footer/>
    </div>
  );
};

export default about;
