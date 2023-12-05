import React from 'react'
import '../../css/testimonials/testi.css'
import { RiDoubleQuotesL } from "react-icons/ri";
import SecLH from '../home/SecLH';
import SecIH from '../home/SecIH';
import SecGH from '../home/SecGH';
import Footer from '../footer/Footer';
const Testi = () => {

let arr = [
  {id: 1, name : 'Antony Josh', role : 'ADMIN,BACKEND-DEVELOPER', message : 'What a great service and products!This website is one of the most convinent stores for bikes.',date : '11/12/2023'},
  {id: 2, name : 'William Joe', role : 'MANAGER,TEAM LEAD', message : 'What a great service and products!This website is one of the most convinent stores for bikes.',date : '11/12/2023'},
  {id: 3, name : 'Jordan Smash', role : 'MARKETING COORDINATOR, LOUIS VUITTON', message : 'What a great service and products!This website is one of the most convinent stores for bikes.',date : '11/12/2023'},
  {id: 4, name : 'Xi Xaung Chi', role : 'DESIGNER,FREELANCER', message : 'What a great service and products!This website is one of the most convinent stores for bikes.',date : '11/12/2023'},
  {id: 5, name : 'Mona Gel', role : 'HR,TEAM LEAD,FOUNDER OF LOUIS', message : 'What a great service and products!This website is one of the most convinent stores for bikes.',date : '11/12/2023'},
  {id: 6, name : 'Adam Swag', role : 'PROFESSIONAL BIKER', message : 'What a great service and products!This website is one of the most convinent stores for bikes.',date : '11/12/2023'},
]

  return (
<>
<div className='tst-ctn pt-[150px] org-bg'>
      <div className="tst-title lg-f">Reviews of Our Services</div>
      <div className="tst-div-ctn mb-[60px]">
  {
    arr.map((data,index) => (
      <div key={index} className="tst-div">
      <RiDoubleQuotesL className='tst-icn' />   
      <div className="tst-name text-white">{data.name}</div>    
      <div className="tst-role text-white text-[14px] font-[400] sec-f">{data.role}</div>
      <div className="tst-msg text-white text-[16px] font-[500] sec-f">{data.message}</div>
      <div className="tst-date text-white text-[12px] font-[600] sec-f">{data.date}</div>
</div>
    ))
  }
      </div>
      <SecGH/>
    </div>
<Footer/>
</>
  )
}

export default Testi