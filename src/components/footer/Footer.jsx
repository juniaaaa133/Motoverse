import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
  <>
  <div>
        <div className="foo1 w-[95%] mx-auto">
            <div className="f1d1">
                <div className="foo-title titF lg-f">We're here to help</div>
                <div className="foo-desc sec-f text-[16px] text-white">Strap on your helmet, rev your engine, and dive into the world of ATV & Motorcycle with us!</div>
                <div className="lh-social foo-social w-fit flex gap-[23px]">
                <FaFacebookF className="lh-facebook foo-icn bcu trans"/>
                <FaTwitter className="lh-x foo-icn bcu trans"/>
                <FaInstagram className="lh-insta foo-icn bcu trans"/>
            </div>
            </div>
            <div className="f1d2">
                <div className="f1d2-title text-[24px] font-[700] lg-f text-white">Subscribe to newsletter, never miss our news.</div>
                <div className="foo-info flex items-center gap-[12px]">
  <input type="text" name="" placeholder='E-Mail' id="" className="trans foo-input" />
  <button className="foo-ebtn typ-btn-light trans">GET IN TOUCH</button>
</div>
<div className="foo-nav sec-f flex gap-[34px]">
    <NavLink className='fnavs trans' to='/'>Home</NavLink>
    <NavLink className='fnavs trans' to='/news'>News</NavLink>
    <NavLink className='fnavs trans' to='/our-team'>Our Team</NavLink>
    <NavLink className='fnavs trans' to='/about'>About</NavLink>
    <NavLink className='fnavs trans' to='/shop'>Shop</NavLink>

</div>
            </div>
        </div>
    </div>
  </>
  )
}

export default Footer