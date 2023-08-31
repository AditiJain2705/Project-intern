import React from 'react'
import styles from "./style.module.css";
import { motion } from "framer-motion"
const Product = () => {
  
  return (
    <div className=' h-screen w-full'>
      <motion.div whileHover={{x:20,scale:1.1}} className={styles.card}>
      <img src="https://images.unsplash.com/photo-1596205250168-c3583813eea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
      <h1 className='text-white decoration-solid text-xl'>Cucine</h1>
      </motion.div>
      <motion.div whileHover={{x:-20,scale:1.1}} className={styles.card1}>
      <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGtpdGNoZW4lMjBhcHBsaWFuY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" />
      <h1 className='text-white decoration-solid text-xl'>Sistemi</h1>
      </motion.div>
      
      
    </div>
  )
  }


export default Product
