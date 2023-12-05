import React from 'react'
import '../../css/contact/contact.css'
import SecLH from '../home/SecLH'
import Footer from '../footer/Footer'

const Contact = () => {
  return (
<>
<div className='c-bg pt-[170px]'>
      <div className="c-us text-center sec-f">Contact us</div>
 <div className="contact-ctn">
 <div className="c-desc">
                <div className="c-d1 lg-f">We will assist you as promptly as possible</div>
                <div className="c-d2 sec-f">
                Please note that while we make every effort to respond to all inquiries, response times may vary depending on the volume of messages we receive. Rest assured, we review and consider each message we receive, and we appreciate your patience.
                </div>
              </div>
<div className="c-form-ctn">
<div className="c-form">
        <input type="text" placeholder='First Name' className="sec-f fname typ-input trans c-tyinp " />
        <input type="text" placeholder='Last Name' className="sec-f scenam typ-input trans c-tyinp" />
        <input type="text" placeholder='Your email' className="sec-f ce typ-input trans c-tyinp" />
        <input type="text" placeholder='Phone number' className="sec-f cp typ-input trans c-tyinp" />
        <textarea name="" placeholder='Your text' id=""  className="sec-f trans ctxt typ-input"></textarea>
              </div>
              <button className="mixed-btn c-btn trans">SUBMIT</button>
</div>
          
 </div>
 <SecLH/>
    </div>
    <Footer/>
</>
  )
}

export default Contact