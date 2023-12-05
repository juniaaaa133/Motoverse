import React from 'react'
import SecFAQ from '../faq/SecFAQ'
import PersonWitLink from '../about/PersonWitLink'
import SecGH from '../home/SecGH'
import Footer from '../footer/Footer'

const Team = () => {
  let persons = [
    {name: 'Henry James' , role : 'Developer' , img : 'https://i.pinimg.com/236x/74/62/59/746259d9149b56533dd2012197f34f4a.jpg'},
    {name: 'Emma Nosh' , role : 'CEO' , img : 'https://i.pinimg.com/236x/6c/45/d4/6c45d4770fbda020c8a2c0d839e25830.jpg'},
    {name: 'Mia Adam' , role : 'Designer' , img : 'https://i.pinimg.com/236x/58/a6/18/58a6183b3fd0846117284849b1353276.jpg'},
    {name: 'David' , role : 'Professional Biker' , img : 'https://i.pinimg.com/236x/c5/30/65/c530658fa4b38d40c46c2f0148a8cf57.jpg'},
    {name: 'Henry James' , role : 'Developer' , img : 'https://i.pinimg.com/236x/74/62/59/746259d9149b56533dd2012197f34f4a.jpg'},
    {name: 'Emma Nosh' , role : 'CEO' , img : 'https://i.pinimg.com/236x/6c/45/d4/6c45d4770fbda020c8a2c0d839e25830.jpg'},
    {name: 'Mia Adam' , role : 'Designer' , img : 'https://i.pinimg.com/236x/58/a6/18/58a6183b3fd0846117284849b1353276.jpg'},
    {name: 'David' , role : 'Professional Biker' , img : 'https://i.pinimg.com/236x/c5/30/65/c530658fa4b38d40c46c2f0148a8cf57.jpg'},
  
  ]

  return (
    <>
    <div className="org-bg">
<div className="relative h-[320px] w-full">
<img src="https://i.pinimg.com/236x/17/66/32/1766329125cdb5e9188bc95e67e7515f.jpg" alt="" className="w-full h-[100%] rounded-b-[23px] pic" />
<div className="absolute w-fit h-fit m-auto left-0 right-0 bottom-[20px] text-white titF-72">Our Team</div>
</div>      
      <div className=" text-center px-[30px] titF-42 py-[57px]">Passionate About Sharing Their Love For The Sport</div>
  <div className="grid-ctn">
   {
    persons.map((data,index) => (
      <PersonWitLink key={index} name={data.name} role={data.role} img={data.img}/>
    ))
   }
   </div>
      <SecFAQ/>
    </div>
   <SecGH/>
   <Footer/>
    </>
  )
}

export default Team