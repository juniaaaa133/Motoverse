import React, { useState } from 'react'
import { FaSearch, FaShopware } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import '../../css/nav/nav.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { CgMenuRight } from "react-icons/cg";

const Nav = () => {


let navigate = useNavigate();    

let [AboutCss,setAboutCss] = useState('nctn-abtblk');
let [NewsCss,setNewsCss] = useState('nctn-abtblk');
let [AllPagesCss,setAllPagesCss] = useState('nctn-abtblk');
let [searchBlock,setSearchBlock] = useState('nav-srhblk-dis')
let [cartCss,setCartCss] = useState('nav-srhblk-dis')
let [smNavCtn,setSmNavCtn] = useState(false);
let [isActiveNav,SetIsActiveNav] = useState(false)
let [navCss,setNavCss] = useState('');
let [navMenu,setNavMenu] = useState(false)

let CssStylingFn = (type) => {
    switch (type) {
        case 'about':
            setAboutCss('nctn-abtblk-hv')
            break;
            case 'news':
                setNewsCss('nctn-nwblk-hv')
                break;
            case 'cart' :
                setCartCss('nav-cart-ctn-dis')
                break;
        default:
            setAllPagesCss('nctn-allblk-hv');
            break;
    }
}

let NavCssStylingFn = (type) => {
    SetIsActiveNav(!isActiveNav)
  switch (isActiveNav) {
    case true:
        if(type == 'about') {
            setNavCss('T-abt')
        }else if(type == 'news'){
            setNavCss("T-news")
        }else {
            setNavCss('T-all');
        }
        break;
    default:
        if(type == 'about') {
            setNavCss('F-abt')
        }else if(type == 'news'){
            setNavCss("F-news")
        }else {
            setNavCss('F-all');
        }
        break;
  }
}

  return (
   <>
    <div className='nav-ctn nav-bg-white sec-f'>
        <NavLink to='/' className="bcu nav-title text-[28px] font-[500] lg-f bcu">Motoverse</NavLink>
        <div className="nav-bars">
            <NavLink to='/' className={({isActive}) => isActive == true ? `trans nav-child nav-bars-home bcu nav-part`:`trans nav-child nav-bars-home bcu`}>Home</NavLink>
            <NavLink onMouseEnter={()=>CssStylingFn('about')} onMouseLeave={()=>setAboutCss('nctn-abtblk')}  className="trans nav-child nav-bars-abt bcu">About Us</NavLink>
            <NavLink to='/services'  className="trans nav-child nav-bars-serv bcu">Services</NavLink>
            <NavLink onMouseEnter={()=>CssStylingFn('news')} onMouseLeave={()=>setNewsCss('nctn-abtblk')} className="trans nav-child nav-bars-News bcu">Team</NavLink>
            <NavLink onMouseEnter={()=>CssStylingFn('all')} onMouseLeave={()=>setAllPagesCss('nctn-abtblk')}  className="trans nav-child nav-bars-allpg bcu">All Pages</NavLink>
        </div>
    <div className="nav-sec-div items-center vanilla-flex bcu">
    <div className="px-[12px] text-[20px]  nav-srh" onClick={()=>setSearchBlock('nav-srhblk')}>
            <FaSearch/>
        </div>
        <div onClick={()=>setCartCss('nav-cart-ctn')} className="px-[12px] text-[20px] nav-shop bcu">
            <TiShoppingCart/>
        </div>
        <div onClick={()=>setNavMenu(true)} className="px-[12px] text-[20px] nav-menu bcu">
            <CgMenuRight/>
        </div>
        
        <NavLink to='/contact-us' className="px-[12px] nav-ct-btn trans font-[700] text-[14px] bcu">CONTACT US</NavLink>
    </div>
    </div>
    {/**About Block */}
    <div onMouseEnter={()=>CssStylingFn('about')} onMouseLeave={()=>setAboutCss('nctn-abtblk')} className={` ${AboutCss} shadow-md vanilla-fle items-left justify-start flex-col`}>
        <NavLink to='/about-us' className={({isActive}) => isActive == true ?"nctn-abt py-[8px] nav-part trans vanilla-flex  items-center gap-[12px] nctn-child" :" nctn-child gap-[12px] items-center vanilla-flex trans nctn-abt py-[8px]"}>
            <div className="nctn-bdot nav-bg-part trans"></div>
            <div className="naV-abt trans">About</div>
        </NavLink>
        <NavLink to='/our-team' className={({isActive}) => isActive == true ?"nctn-team py-[8px] nav-part trans items-center gap-[12px] nctn-child vanilla-flex " :"vanilla-flex nctn-child gap-[12px] items-center trans nctn-team py-[8px]"}>
        <div className="nctn-bdot nav-bg-part trans"></div>
            <div className="naV-abt trans">Our Team</div>
        </NavLink>
        <NavLink to='/testimonials' className={({isActive}) => isActive == true ?"nctn-tes py-[8px] nav-part trans items-center gap-[12px] nctn-child vanilla-flex" :" vanilla-flex nctn-child gap-[12px] items-center trans nctn-tes py-[8px]"}>
        <div className="nctn-bdot nav-bg-part trans"></div>
            <div className="naV-abt trans">Testimonials</div>
        </NavLink>
        <NavLink to='/faq' className={({isActive}) => isActive == true ?"nctn-faq py-[8px] nav-part trans items-center gap-[12px] nctn-child vanilla-flex" :" vanilla-flex nctn-child gap-[12px] items-center trans nctn-faq py-[8px]"}>
        <div className="nctn-bdot nav-bg-part trans"></div>
            <div className="naV-abt trans">FAQ</div>
        </NavLink>

    </div>
      {/**Team Block */}
      <div onMouseEnter={()=>CssStylingFn('news')} onMouseLeave={()=>setNewsCss('nctn-abtblk')} className={` ${NewsCss} shadow-md vanilla-fle items-left justify-start flex-col`}>
        <NavLink to='/news' className={({isActive}) => isActive == true ?"nctn-abt py-[8px] nav-part trans vanilla-flex  items-center gap-[12px] nctn-child" :" nctn-child gap-[12px] items-center vanilla-flex trans nctn-abt py-[8px]"}>
            <div className="nctn-bdot nav-bg-part trans"></div>
            <div className="naV-abt trans">Our Team</div>
        </NavLink>
        <NavLink to='/news/details' className={({isActive}) => isActive == true ?"nctn-gal py-[8px] nav-part trans items-center gap-[12px] vanilla-flex nctn-child" :" nctn-child vanilla-flex gap-[12px] items-center trans nctn-gal py-[8px]"}>
        <div className="nctn-bdot nav-bg-part trans"></div>
            <div className="naV-abt trans">Testimonials</div>
        </NavLink>

    </div>
       {/**AllPages Block */}
       <div onMouseEnter={()=>CssStylingFn('all')} onMouseLeave={()=>setAllPagesCss('nctn-abtblk')} className={` ${AllPagesCss} shadow-md items-left justify-between`}>
       <div className="naV-all-c1">
       <NavLink to='/' className={({isActive}) => isActive == true ?"nctn-abt py-[8px] nav-part trans vanilla-flex  items-center gap-[12px] nctn-child" :" nctn-child gap-[12px] items-center vanilla-flex trans nctn-abt py-[8px]"}>
            <div className="nctn-bdot nav-bg-part trans"></div>
            <div className="naV-abt trans">Home</div>
        </NavLink>
        <NavLink to='/about-us' className={({isActive}) => isActive == true ?"nctn-gal py-[8px] nav-part trans items-center gap-[12px] vanilla-flex nctn-child" :" nctn-child vanilla-flex gap-[12px] items-center trans nctn-gal py-[8px]"}>
        <div className="nctn-bdot nav-bg-part trans"></div>
            <div className="naV-abt trans">About Us</div>
        </NavLink>
        <NavLink to='/services' className={({isActive}) => isActive == true ?"nctn-abt py-[8px] nav-part trans vanilla-flex  items-center gap-[12px] nctn-child" :" nctn-child gap-[12px] items-center vanilla-flex trans nctn-abt py-[8px]"}>
            <div className="nctn-bdot nav-bg-part trans"></div>
            <div className="naV-abt trans">Our Services</div>
        </NavLink>
        <NavLink to='/our-team' className={({isActive}) => isActive == true ?"nctn-gal py-[8px] nav-part trans items-center gap-[12px] vanilla-flex nctn-child" :" nctn-child vanilla-flex gap-[12px] items-center trans nctn-gal py-[8px]"}>
        <div className="nctn-bdot nav-bg-part trans"></div>
            <div className="naV-abt trans">Our Team</div>
        </NavLink>
   
       </div>
       <div className="naV-all-c2">
           
       <NavLink to='/testimonials' className={({isActive}) => isActive == true ?"nctn-gal py-[8px] nav-part trans items-center gap-[12px] vanilla-flex nctn-child" :" nctn-child vanilla-flex gap-[12px] items-center trans nctn-gal py-[8px]"}>
        <div className="nctn-bdot nav-bg-part trans"></div>
            <div className="naV-abt trans">Testimonials</div>
        </NavLink>
       <NavLink to='/faq' className={({isActive}) => isActive == true ?"nctn-abt py-[8px] nav-part trans vanilla-flex  items-center gap-[12px] nctn-child" :" nctn-child gap-[12px] items-center vanilla-flex trans nctn-abt py-[8px]"}>
            <div className="nctn-bdot nav-bg-part trans"></div>
            <div className="naV-abt trans">FAQ</div>
        </NavLink>
        <NavLink to='/contact-us' className={({isActive}) => isActive == true ?"nctn-gal py-[8px] nav-part trans items-center gap-[12px] vanilla-flex nctn-child" :" nctn-child vanilla-flex gap-[12px] items-center trans nctn-gal py-[8px]"}>
        <div className="nctn-bdot nav-bg-part trans"></div>
            <div className="naV-abt trans">Contact Us</div>
        </NavLink>
       </div>

    </div>
    {/*Cart Block*/} 
    <div className={`${cartCss} trans`}>
        <div className="nc-head flex justify-between py-[2px] items-center">
            <div className="nc-title text-[20px] font-[600] sec-f">Your Cart</div>
        <div onClick={()=>CssStylingFn('cart')} className="nc-x text-[28px] bcu">x</div>
        </div>
        <div className="nc-line"></div>
        <div className="nc-item sec-f">No items found.
</div>
    </div>
    {/*Search Container*/}
    <div className={`${searchBlock} trans flex justify-center items-center gap-[20px] flex-col`}>
        <div onClick={()=>setSearchBlock('nav-srhblk-dis')} className="nsrh-x text-[23px] bcu">X</div>
        <input type="text" placeholder='Enter Search Keyword' name="" id="" className="nav-srh-input sec-f" />
        <button className="nsrh-btn btnf trans">SEARCH</button>
    </div>

    {/*For responsive */}
    <div className={navMenu == true ? `nav-ctn-sm w-[380px] h-[120%] bg-white trans ` :` trans nav-ctn-sm-dis w-[380px] h-[120%] bg-white`}>
<div className="nctn-sm1">
<div className="bcu nav-title text-[28px] font-[500] lg-f bcu">Motoverse</div>
<div onClick={()=>setNavMenu(false)} className="nc-x text-[28px] bcu">x</div>

</div>
<div className='w-[100%] flex' >
<NavLink onClick={()=>setNavMenu(false)} className={({isActive}) => isActive == true ? "bcu w-[100%] nctn-sm2 pt-[10px] nav-part" : "bcu w-[100%] nctn-sm2 pt-[10px]"} to='/'>Home</NavLink>
</div>
<div className="nctn-sm3 pt-[10px]">
    <div onClick={()=>NavCssStylingFn('about')} className="bcu nctn-abt-AA flex justify-between items-center w-[100%] trans">
    <div className="nctn-abtl-A">About Us</div>
    <div className={ navCss == 'T-abt' ? `nctn-abtl trans` : `rotate-[180deg] trans nctn-abtl`}>^</div>
    </div>
<div className={navCss == 'T-abt' ? `trans flex flex-col gap-[10px] mt-[15px] pl-[25px] nctn-abtl-a w-[100%] h-fit trans ` : ` trans flex flex-col gap-[10px] pl-[25px] nctn-abtl-a h-[0px] w-[100%] `}>
<NavLink onClick={()=>setNavMenu(false)} to='/about' className={({isActive}) => isActive == true ? navCss == 'T-abt' ?`trans  delay-[60ms] nav-part ` : `nav-part trans hidden delay-[60ms]` : navCss == 'T-abt' ?`trans  delay-[60ms]` : `trans hidden delay-[60ms]`} >About</NavLink>
<NavLink onClick={()=>setNavMenu(false)} to='/our-team' className={({isActive}) => isActive == true ? navCss == 'T-abt' ?`trans  delay-[60ms] nav-part` : `nav-part trans hidden delay-[60ms]` : navCss == 'T-abt' ?`trans  delay-[60ms]` : `trans hidden delay-[60ms]`} >Our Team</NavLink>
<NavLink onClick={()=>setNavMenu(false)} to='/testimonials' className={({isActive}) => isActive == true ? navCss == 'T-abt' ?`trans  delay-[60ms] nav-part` : `nav-part trans hidden delay-[60ms]` :navCss == 'T-abt' ?`trans  delay-[60ms]` : `trans hidden delay-[60ms]`} >Testimonials</NavLink>
<NavLink onClick={()=>setNavMenu(false)} to='/faq' className={({isActive}) => isActive == true ? navCss == 'T-abt' ?`pb-[10px] trans  delay-[60ms] nav-part ` : `trans hidden delay-[60ms] nav-part` : navCss == 'T-abt' ?`pb-[10px] trans  delay-[60ms]` : `trans hidden delay-[60ms]`} >FAQ</NavLink>
</div>
</div>
<div  className='w-[100%] flex'>
<NavLink onClick={()=>setNavMenu(false)} className={({isActive}) => isActive == true ? "bcu w-[100%] nctn-abtl-a pt-[10px] nav-part" : "bcu w-[100%] nctn-abtl-a pt-[10px]"} to='/services'>Services</NavLink>
</div>
<div className="nctn-sm3 pt-[10px]">
    <div onClick={()=>NavCssStylingFn('news')} className="bcu nctn-abt-AA flex justify-between items-center w-[100%] trans">
    <div className="nctn-abtl-A">Team</div>
    <div className={navCss == 'T-news' ? `nctn-abtl trans` : `rotate-[180deg] trans nctn-abtl`}>^</div>
    </div>
<div className={navCss == 'T-news' ? `trans flex flex-col gap-[10px] mt-[15px] pl-[25px] nctn-abtl-a w-[100%] h-fit trans` : `trans flex flex-col gap-[10px]  pl-[25px] nctn-abtl-a h-[0px] w-[100%] `}>
<NavLink onClick={()=>setNavMenu(false)} to='/our-team' className={({isActive}) => isActive == true ? navCss == 'T-news' ?`trans  delay-[60ms] nav-part` : `nav-part trans hidden delay-[60ms]` : navCss == 'T-news' ?`trans  delay-[60ms]` : `trans hidden delay-[60ms]`} >Our Team</NavLink>
<NavLink onClick={()=>setNavMenu(false)} to='/testimonials' className={({isActive}) => isActive == true ? navCss == 'T-news' ?`trans  delay-[60ms] nav-part` : `nav-part trans hidden delay-[60ms]` : navCss == 'T-news' ?`trans  delay-[60ms]` : `trans hidden delay-[60ms]`} >Testimonials</NavLink>
</div>
</div>
<div className="nctn-sm3 pt-[10px]">
    <div onClick={()=>NavCssStylingFn('all')} className="bcu nctn-abt-AA flex justify-between items-center w-[100%] trans">
    <div className="nctn-abtl-A">All Pages</div>
    <div className={navCss == 'T-all' ? `nctn-abtl trans` : `rotate-[180deg] trans nctn-abtl`}>^</div>
    </div>
<div className={navCss == 'T-all' ? `trans flex flex-col gap-[10px] mt-[15px] pl-[25px] nctn-abtl-a w-[100%] h-[150px] overflow-auto` : ` trans flex flex-col gap-[10px] mt-[15px] pl-[25px] nctn-abtl-a h-[0px] w-[100%] `}>
<NavLink onClick={()=>setNavMenu(false)} to='/' className={({isActive}) => isActive == true ? navCss == 'T-all' ?`trans  delay-[60ms] nav-part` : `trans hidden delay-[60ms] nav-part` :navCss == 'T-all' ?`trans  delay-[60ms]` : `trans hidden delay-[60ms]`} >Home</NavLink>
<NavLink onClick={()=>setNavMenu(false)} to='/about' className={({isActive}) => isActive == true ? navCss == 'T-all' ?`trans  delay-[60ms] nav-part ` : `nav-part trans hidden delay-[60ms]` : navCss == 'T-all' ?`trans  delay-[60ms]` : `trans hidden delay-[60ms]`} >About Us</NavLink>
<NavLink onClick={()=>setNavMenu(false)} to='/services' className={({isActive}) => isActive == true ? navCss == 'T-all' ?`trans  delay-[60ms] nav-part` : ` trans hidden delay-[60ms]` : navCss == 'T-all' ?`trans  delay-[60ms]` : `trans hidden delay-[60ms]`} >Our Services</NavLink>
<NavLink onClick={()=>setNavMenu(false)} to='/our-team' className={({isActive}) => isActive == true ? navCss == 'T-all' ?`trans  delay-[60ms] nav-part` : `nav-part trans hidden delay-[60ms]` : navCss == 'T-all' ?`trans  delay-[60ms]` : `trans hidden delay-[60ms]`} >Our Team</NavLink>
<NavLink onClick={()=>setNavMenu(false)} to='/testimonials' className={({isActive}) => isActive == true ? navCss == 'T-all' ?`trans  delay-[60ms] nav-part` : `nav-part trans hidden delay-[60ms]` : navCss == 'T-all' ?`trans  delay-[60ms]` : `trans hidden delay-[60ms]`} >Testimonials</NavLink>
<NavLink onClick={()=>setNavMenu(false)} to='/faq' className={({isActive}) => isActive = true ? navCss == 'T-all' ?`pb-[10px] trans  delay-[60ms] nav-part` : `trans hidden delay-[60ms] nav-part` : navCss == 'T-all' ?`pb-[10px] trans  delay-[60ms]` : `trans hidden delay-[60ms]`} >FAQ</NavLink>
<NavLink onClick={()=>setNavMenu(false)} to='/contact-us' className={({isActive}) => isActive == true ? navCss == 'T-all' ?`pb-[10px] trans  delay-[60ms] nav-part` : `trans hidden delay-[60ms] nav-part` : navCss == 'T-all' ?`pb-[10px] trans  delay-[60ms]` : `trans hidden delay-[60ms]`} >Contact Us</NavLink>
</div>
</div>
<NavLink to='/contact-us' onClick={()=>setNavMenu(false)}  className="trans nav-child nav-ct-btn-sm bcu">CONTACT US</NavLink>
    </div>
    </>
  )
}

export default Nav