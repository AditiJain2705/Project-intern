import React from 'react'
import styles from './style.module.css'
const Footer = () => {
  return (
    <div className={styles.ftr}>
 
         <div className={styles.location}>
          <ul>
            <li>New York</li>
          <li>London</li>
          <li>San Francisco</li>
          <li> Bangkok</li>
        <li>Miami</li>
        </ul>
         </div>
          <div className={styles.listparent}>
<div className={styles.sitemap}>
  <h1>SITEMAP</h1>
  <br/>
  <ul>
  <li>About</li>
  <li>Projects</li>
  <li>Services</li>
  <li>Awards & Press</li>
  <li>Culture</li>
  <li>Contact</li>
</ul></div>
<div className={styles.icon}>
  <h1>SOCIAL</h1><br/>
  <ul><li>Instagram</li>
  <li>Facebook</li>
<li>LinkedIn</li>
<li>Newsletter</li></ul>
</div>
<div className={styles.avrow}>
  <h1>AVROKO WORLD</h1><br/>
  <ul><li>
    Brand Bureau</li>
  <li>Goodshop
   
   </li>
   <li> AvroKO Hospitality Group</li>
  <li>
    Hospitable Inc.</li></ul>
</div>
          </div>
       


    </div>
  )
}

export default Footer