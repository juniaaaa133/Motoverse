import React from 'react'
import { MdPedalBike } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const SecGH = () => {
  return (
    <div to='/contact-us' className='gh-ctn nav-bg-part bcu'> 
        <NavLink to='/contact-us' className="gh-flx text-[38px] font-[700]">
            <div className="gh-txt1">
                <MdPedalBike/>
            </div>
            <div className="gh-txt2">
                BE PART OF A THRIVING COMMUNITY , JOIN US!
            </div>
            <div className="gh-txt1">
                <MdPedalBike/>
            </div>
            <div className="gh-txt2">
                BE PART OF A THRIVING COMMUNITY , JOIN US!
            </div>
        </NavLink>
    </div>
  )
}

export default SecGH