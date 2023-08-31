'use client'
import React from 'react'
import { motion } from "framer-motion"
import Content from './Component/index'
import Product from './Page2/index'
import Footer from './Footer/index'

import { M_PLUS_1 } from 'next/font/google'
const page = () => {
  return (

    <>
    
<div className='page1'>
 <nav className='flex justify-between'>
  <div className='Logo'><h1 className='text-white text-xl'>Innovation</h1></div>
  <div className='h-full w-2/5 mt-2'>
    <ul  className='flex justify-around text-white text-xs'>
      <li>Cuisine</li>
      <li>About</li>
      <li>Contact Us</li>
      <li>Catalogue</li>
    </ul>
  </div>
 </nav>

<video loop muted autoPlay src="https://www.euromobil.com/img/home/euromobil_home_mobi.mp4"></video>

<h1>KITCHEN BY YOU</h1>
<a href="#" class="buttonClass">Order Now</a>


</div>
<Content/>
<Product/>
<Footer/>
    </>
    
  
  )
}

export default page
