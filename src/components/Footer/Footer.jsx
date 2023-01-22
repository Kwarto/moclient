import React from 'react'
import {FooterWrapper, FooterMain, FooterItem} from './FooterElement'
function Footer() {
  return (
    <>
     <FooterWrapper>
       
        <FooterItem>
        <FooterMain>
        <h1>ZIP FASHION</h1>
        <p>Zip Fashion is a distributor of a wide range of fashion products for several brands across the globe. We have been making impact items of sales, marketing and branding in general. </p>
       </FooterMain>
         <div>
            <h1>About Us</h1>
            <p>Careers</p>
            <p>Our Stores</p>
            <p>Our Cares</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
         </div>
         <div>
            <h1>Customer Care</h1>
            <p>Help Center</p>
            <p>How To Buy</p>
            <p>Track Your Order</p>
            <p>Corporate & Bulk purchasing</p>
            <p>Returns & Refunds</p>
         </div>
         <div>
            <h1>Contact Us</h1>
            <p>Kumasi, Adum</p>
            <p>Email: support@zipfashion.com</p>
            <p>Phone: +233204378020</p>
         </div>
       </FooterItem>
     </FooterWrapper>
     <div className='f-copy'>
        <p>&copy; 2022 Zip Fashion | All Copyrights Reserved</p>
     </div>
    </>
  )
}

export default Footer