/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import image from "../image/2.png"
import Tester from './Tester';
import Footer from '../components/Footer';


const Homepage = () => {
  return (
    <div>
    <div className='bg-red-500 lg:pb-0 pb-96'>
    <Header/>
    <section className="flex justify-center items-center h-screen container mx-auto px-4 md:flex-row flex-col ">
      <div className="flex-1 px-8 text-white text-center md:text-left">
        <h1 className="lg:text-7xl text-4xl font-bold mb-4 text-white md:pt-0 pt-96">
          Manage Your Inventory with Ease
        </h1>

        <p className=" text-base lg:text-2xl mb-10">
        Streamline your lab's inventory management process <br className=' lg:block hidden'/>
        with our efficient and organized platform at Inventory Lab Telti.
        </p>
        <Link to="about" className=" bg-blue-500 text-white py-4 lg:px-20 px-10 rounded-full text-lg hover:bg-green-500 hover:text-zinc-100">
          About Us
        </Link>
      </div>
      <div className="md:order-first md:mt-8" >
        <img
          src={image} 
          alt="Inventory Lab"
          className=" w-80 m-10 pt-20 lg:pt-0  "
        />
      </div>
    </section>
    </div>
    <section className='text-center px-8 mx-40 mb-44'>
    <h1 className='mt-20 mb-10'>List Barang</h1>
    <Tester/>
    </section>
    <Footer/>
    </div>
  )
}

export default Homepage