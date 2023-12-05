import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const PersonWitLink = ({img,name,role}) => {
    return (
      <div className='card'>
          <img src={img} alt="" className="pic card-img"/>
          <div className="card-data">
              <div className="card-name">{name}</div>
              <div className="card-role">{role}</div>
              <div className="social flex items-center justify-evenly w-full pb-[10px] mt-[20px]">
        <FaInstagram/>
        <FaFacebookF/>
        <FaWhatsapp/>
        <FaTwitter/>
              </div>
          </div>
      </div>
    )
}

export default PersonWitLink