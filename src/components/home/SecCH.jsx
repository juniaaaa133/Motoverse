import React from 'react'

const SecCH = () => {

let arr = [
  {id: 1 ,img_txt : 'Adrenaline-Fueled Sports', img : 'https://i.pinimg.com/236x/1e/ab/68/1eab689377e810e2d568658c50af6000.jpg', title :'Join us at ATM & Motorcycle' , desc : 'Looking to upgrade your motorcycle or gear? We provide honest and detailed reviews of the latest bikes, accessories, and safety equipment. Make informed decisions and find the perfect fit for your needs.'},
  {id: 2 ,img_txt : 'Dive Into The World', img : 'https://i.pinimg.com/474x/3c/f3/c3/3cf3c3dee4141db5416f623fd6675c12.jpg', title :'Strap on your helmet, rev your engine' , desc : 'Immerse yourself in the world of motocross through our collection of captivating videos and stunning photos. Relive epic races, witness incredible stunts, and get inspired by the passion that drives the motocross community.  '}
  // 2630 471 2760
]

  return (
    <div>
      <div className="bar"></div>
      <div className="ch-main">
      {
        arr.map((data,key) => (
          key % 2 == 0 ? 
          <div className="ch-ctn">
          <div className="ch-2">
            <div className="ch-title font-[600] text-[24px] sec-f">{data.title}</div>
            <div className="ch-desc font-[500] text-[16px] sec-f">{data.desc}</div>
            <div className="chbtn typ-btn lg-f trans bcu">LEARN MORE</div>
          </div>
          <div className="ch-1">
            <img src={data.img} alt="" className="ch-img pic" />
            <div className="ch-img-txt titF lg-f">{data.img_txt}</div>
          </div>
        </div>
          :
          <div className="ch-ctn ch-ctn-rev">
          <div className="ch-1">
            <img src={data.img} alt="" className="ch-img pic" />
            <div className="ch-img-txt titF lg-f">{data.img_txt}</div>
          </div>
          <div className="ch-2">
            <div className="ch-title font-[600] text-[24px] sec-f">{data.title}</div>
            <div className="ch-desc font-[500] text-[16px] sec-f">{data.desc}</div>
            <div className="chbtn typ-btn lg-f trans bcu">LEARN MORE</div>
          </div>
        </div>

        ))
      }
      </div>
 
    
    </div>
  )
}

export default SecCH