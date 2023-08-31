'use client'
import React from 'react'
import styles from './style.module.css'
import { motion } from "framer-motion"

const index = () => {
  return (
  <div className={styles.page2}>
<motion.div    className={styles.desc}
    
    initial="hidden"
    animate="visible" >
  <h1  className='ml-10 mt-10 text-4xl text-white'>Design Your Kitchen</h1>
 
 <h1 className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quos exercitationem aspernatur error ab alias, atque minus cupiditate cum ipsum incidunt odio iure temporibus illo doloremque. Id nisi deleniti laboriosam.</h1>
   
  <motion.div whileHover={{x:10}}>
  <h1 className='text-white ml-10 mt-5'>Get Kitchen Appliance ⟶</h1>
</motion.div>
</motion.div>
<motion.div className={styles.card1}initial={{scale:0.8}}whileHover={{scale:0.9}} >
<img src="https://elements.falmec.com/images/intro/monolith-thumbnail.webp" alt="" />
<h1 className='position-absolute top-5 text-white'>Standard Modular Kitchen

</h1>





</motion.div>


  </div>
  
  )
}

export default index
