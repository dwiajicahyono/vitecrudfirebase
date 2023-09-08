/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

<section className="bg-blue-500">
<div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
        <div className="px-5 py-2">
            <Link to='/' className="text-base leading-6 text-amber-100 hover:text-gray-900">
                Home
            </Link>
        </div>
        <div className="px-5 py-2">
            <Link to='/list' className="text-base leading-6 text-amber-100 hover:text-gray-900">
                List Barang
            </Link>
        </div>
        <div className="px-5 py-2">
            <Link to='/about' className="text-base leading-6 text-amber-100 hover:text-gray-900">
                About
            </Link>
        </div>
       
        
    </nav>
    
    <p className="mt-8 text-base leading-6 text-center text-amber-100">
        © 2023 Lab Telti, Inc. All rights reserved.
    </p>
</div>
</section>
  )
}

export default Footer