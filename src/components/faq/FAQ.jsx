import React from 'react'
import SecFAQ from './SecFAQ'
import SecIH from '../home/SecIH'
import Footer from '../footer/Footer'
const FAQ = () => {
  return (
  <>
    <div className='org-bg'>
      <div className="faq titF-72 pt-[140px] pb-[20px] text-center" >FAQ</div>
      <SecFAQ/>
    </div>
    <SecIH/>
    <Footer/>
  </>
  )
}

export default FAQ