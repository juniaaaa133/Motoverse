import React from 'react'
import SecAH from './SecAH'
import '../../css/home/home.css'
import SecBH from './SecBH'
import SecCH from './SecCH'
import SecJH from './SecJH'
import SecIH from './SecIH'
import SecDH from './SecDH'
import SecEH from './SecEH'
import SecGH from './SecGH'
import SecLH from './SecLH'
import SecKH from './SecKH'
import Footer from '../footer/Footer'
const Home = () => {
  return (
<>
<SecAH/>
<SecBH/>
<SecCH/>
<SecDH/>
<SecEH/> {/*No any css file __(secEH.css)*/}
{/**No SecFH ; start from SecGH */}
<SecGH/>
{/**No SecHH ; start from SecIH */}
<SecIH/>
<SecJH/>  {/**SecJH.jsx is used from SecBH.jsx (secBH.css)  --> secJH.s\css = secBH.css*/}
<SecKH/>
<SecLH/>
<Footer/>
</>
  )
}

export default Home