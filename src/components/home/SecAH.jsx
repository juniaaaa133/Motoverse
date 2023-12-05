import React from 'react'
import { MdPhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const SecAH = () => {
  return (
    <div className='ah-main pt-[150px]'>
        <div className="ah-layout-flx ah-layout">
            <div className="ah-tag nav-bg-part px-[17px] py-[3px] w-fit h-fit rounded-[20px] sec-f font-[14px]">Keeping you in the loop</div>
            <div className="ah-title lg-f">Passionate about motorcycles</div>
            <div className="ah-desc">Join us at ATM & Motorcycle and be part of a thriving community that celebrates the adrenaline-fueled sport of motocross. Whether you're seeking information, entertainment, or connection, we've got it all covered</div>
            <button className="ah-exbtn sec-f trans">EXPLORE MORE</button>
        </div>
        <div className="ah-layout ah-layout-pic">
          <div className="ah-img-pnt"></div>
<img src="https://i.pinimg.com/236x/23/4d/f8/234df80591502b18e26897e292390df6.jpg" alt="" className="pic ah-img" />
        </div>
        <div className="ah-info absolute w-[96%] rounded-[20px] mx-[auto] right-0 left-0 bottom-[-40px] h-[fit-content] py-[18px] px-[16px] nav-bg-part flex justify-between items-center">
<div className="ah-info1 w-[51%] flex items-center gap-[12px] ">
  <div className="flex gap-[12px]">
  <MdPhoneInTalk className='ah-ph-icn text-[32px]'/>
  <div className="ah-phone bcu trans">(704) 358-1528</div>
  </div>
<div className="flex gap-[12px]">
<CiLocationOn className='ah-add-icn text-[32px]'/>
  <div className="ah-address bcu trans">14 Tottenham Road, London, England</div>

</div>
  </div>
<div className="ah-info2 w-[fit-content] flex items-center gap-[12px]">
  <input type="text" name="" placeholder='E-Mail' id="" className="trans ah-input" />
  <button className="ah-ebtn typ-btn">GET IN TOUCH</button>
</div>
        </div>
    </div>
  )
}

export default SecAH