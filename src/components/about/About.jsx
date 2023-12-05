import React from 'react'
import '../../css/about/about.css'
import { FaPlay } from "react-icons/fa";
import SecDH from '../home/SecDH';
import SecEH from '../home/SecEH';
import PersonsAbs from './PersonsAbs';
import SecGH from '../home/SecGH';
import Footer from '../footer/Footer'

const About = () => {

let persons = [
  {name: 'Henry James' , role : 'Developer' , img : 'https://i.pinimg.com/236x/74/62/59/746259d9149b56533dd2012197f34f4a.jpg'},
  {name: 'Emma Nosh' , role : 'CEO' , img : 'https://i.pinimg.com/236x/6c/45/d4/6c45d4770fbda020c8a2c0d839e25830.jpg'},
  {name: 'Mia Adam' , role : 'Designer' , img : 'https://i.pinimg.com/236x/58/a6/18/58a6183b3fd0846117284849b1353276.jpg'},
  {name: 'David' , role : 'Professional Biker' , img : 'https://i.pinimg.com/236x/c5/30/65/c530658fa4b38d40c46c2f0148a8cf57.jpg'},

]

  return (
    <>
    <div className="abt-intro">
      <div className="abt-title text-white titF-72 sec-f">About Us</div>
      <div className="abt-desc text-[18px] text-white text-center sec-f">Join us at ATM & Motorcycle and be part of a thriving community that celebrates the adrenaline-fueled sport of motocross</div>
      <button className="mixed-btn trans">CONTACT US</button>
    </div>
    <div className="abtsrv-div">
      <div className="abtsrv1">
        <div className='titF-42 text-white sec-f'>We Live And Breathe Motocross</div>
        <div className='text-white text-[16px] sec-f'>What sets us apart is our deep understanding of the motocross community.</div>
      </div>
      <button className="abtsrv-btn typ-btn-light trans">OUR SERVICES</button>
    </div>
    <a href='https://youtu.be/Th0-1wxD7gM?si=oT_mTJvZJrHyjm2J'>
    <div className="abt-vid mx-auto">
      <FaPlay className='abt-play trans bcu absolute top-0 bottom-0 left-0 right-0 w-fit h-fit m-auto abt-play text-white text-[23px]'/>
    </div>
    </a>
    <div className="bar"></div>
    <div className="abtsrv-engage mx-auto">
      <div className="abten flex flex-col items-center justify-center nav-bg-white">
        <div className="abtentitle titF-42 lg-f">+100,000</div>
        <div className="abtendesc text-center">Providing valuable and engaging content for fellow motocross enthusiasts.</div>
      </div>
      <div className="abten flex flex-col items-center justify-center nav-bg-white">
        <div className="abtentitle titF-42 lg-f">+60,000</div>
        <div className="abtendesc text-center">Providing valuable and engaging content for fellow motocross enthusiasts.</div>
      </div>
      <div className="abten flex flex-col items-center justify-center nav-bg-white">
        <div className="abtentitle titF-42 lg-f">+3,500</div>
        <div className="abtendesc text-center">Providing valuable and engaging content for fellow motocross enthusiasts.</div>
      </div>
    </div>
    <SecDH/>
    <SecEH/>
    <div className="org-bg">
    <div className="abtsrv-div">
      <div className="abtsrv1">
        <div className='titF-42  sec-f'>Passionate About Sharing Their Love For The Sport</div>
        <div className=' text-[16px] sec-f'>What sets us apart is our deep understanding of the motocross community.
</div>
      </div>
      <button className="abtsrv-btn typ-btn-light trans">SHOW MORE</button>
    </div>
    </div>
  <div className="org-bg">
  <div className="grid-ctn">
   {
    persons.map((data,index) => (
      <PersonsAbs key={index} name={data.name} role={data.role} img={data.img}/>
    ))
   }

   </div>
   <div className="bar"></div>
  <SecGH/>
  </div>
  <div className="abt-outro-ctn">
    <div className="abtout-icn text-white sec-f">Instagram: @xxxxxx</div>
    <img src="https://i.pinimg.com/236x/55/c6/42/55c6424f8ac9defae3cba635a0dbda16.jpg" alt="" className="abt-out-img1 pic" />
    <img src="https://i.pinimg.com/236x/72/44/6b/72446b5b3dfa07fda0d3b2d0def6fc7b.jpg" alt="" className="abt-out-img1 pic" />
    <img src="https://i.pinimg.com/236x/8b/80/4d/8b804ddee9c41070da581839359f07f7.jpg" alt="" className="abt-out-img2 pic" />
    <img src="https://i.pinimg.com/236x/85/39/26/85392664ecd12c1a792118f77d64e126.jpg" alt="" className="abt-out-img3 pic" />
    <img src="https://i.pinimg.com/236x/4a/90/cd/4a90cd261fab254df5978b4ca4b4a7da.jpg" alt="" className="abt-out-img3 pic" />
  </div>
 <Footer/>
    </>
  )
}

export default About