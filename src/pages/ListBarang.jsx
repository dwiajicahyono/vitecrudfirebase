import Header from '../components/Header'
import Footer from '../components/Footer'
import Tester from './Tester'

const ListBarang = () => {
  return (
    <>
    <Header/>
    <div className='mb-40'>
    <section className="dark:bg-gray-800 dark:text-gray-100 bg-white">
    <div className="container mx-auto flex flex-col items-center px-4 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl text-blue-900">Daftar Inventaris
      </h1>
      <p className="text-lg">Halaman ini menampilkan daftar Inventaris barang yang tersedia di lab telekomunikasi</p>
      <div className="flex flex-wrap justify-center">
      </div>
    </div>
  </section>
  <div className='container mx-auto'>
  <Tester/></div>
  </div>
  <Footer/>
  </>
  )
}

export default ListBarang