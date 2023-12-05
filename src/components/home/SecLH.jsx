import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SecLH = () => {
  return (
  <>
<div className="bar"></div>
<div className="lh-ctn">
    <img src="https://i.pinimg.com/236x/13/45/3e/13453e8c2297152cfc33ddd44eda379d.jpg" alt="" className="lh-img pic" />
    <div className="lh-map-ctn">
        <div className="lh-info justify-center flex flex-col pl-[40px] w-fit gap-[23px]">
            <div className="lh-add flex flex-col  gap-[23px]">
                <div className="lh-add-title sec-f font-[700] text-[20px]">Find Us</div>
                <div className="lh-address text-[16px]">14 Tottenham Road, London, England</div>
            </div>
            <div className="lh-contact flex flex-col gap-[23px]">
            <div className="lh-c-title sec-f font-[700] text-[20px]">Message Us</div>
               <div>
               <div className="lh-c">information@office.com</div>
                <div className="lh-c">(704) 358-1528</div>
               </div>
            </div>
            <div className="lh-social mt-[30px] flex gap-[23px]">
                <FaFacebookF className="lh-facebook lh-icn bcu trans"/>
                <FaTwitter className="lh-x lh-icn bcu trans"/>
                <FaInstagram className="lh-insta lh-icn bcu trans"/>
            </div>
        </div>
        <div className="lh-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d79454.709427933!2d-0.1385702!3d51.5139559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2d06098567%3A0x657781e4c62dccae!2s14%20Tottenham%20Ct%20Rd%2C%20London%20W1T%207RQ%2C%20UK!5e0!3m2!1sen!2smm!4v1700740598444!5m2!1sen!2smm" width="800" height="450" className=''  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        </div>

    </div>
</div>
  </>
  )
}

export default SecLH