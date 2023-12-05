import React from 'react'

const SecKH = () => {

let arr = [
    {id: 1 , img :'https://i.pinimg.com/236x/c3/71/46/c37146106b23a13402382c8f32be9c9a.jpg',name :'Ghost Moto Helmet(Limited Edition)',old_price :200.0, current_price:100.0},
    {id: 1 , img :'https://i.pinimg.com/236x/3a/45/5a/3a455aff85b22ef79efa437036783293.jpg',name :'Dark Bumbebee Moto Helmet',old_price :150.0, current_price:80.0},
    {id: 1 , img :'https://i.pinimg.com/236x/3e/9f/b8/3e9fb83da46b8df4e11a2f14caf28064.jpg',name :'Female Full Bike Suit',old_price :250.0, current_price:170.0},
    {id: 1 , img :'https://i.pinimg.com/236x/6f/8c/a9/6f8ca93ca7cca807e4d4b04a3ea75868.jpg',name :'Leather Moto Suit (Premium)',old_price :140.0, current_price:40.0},

]

  return (
  <>
  <div className="bar"></div>
  <div className="kh-title-ctn">
    <div className="kh-title">
        <div className="kh-t1 lg-f titF">Our Merchandise</div>
        <div className="kh-t2 sec-f text-[16px] text-white">We provide honest and detailed reviews of the latest bikes, accessories, and safety equipment.</div>
    </div>
    <button className="kh-seebtn typ-btn-light trans">
        EXPLORE ALL
    </button>
  </div>
  <div className="kh-shop-ctn">
    {
        arr.map((data,key) => (
            <div key={key} className="kh-shop bcu">
            <div className="kh-layer">
            <img src={data.img} alt="" className="trans kh-shopimg pic" />
        <button className="kh-shop-btn trans">ADD TO CART</button>
            </div>
            <div className="kh-shname sec-f">{data.name}</div>
            <div className="kh-price">
                <div className="kh-curp text-[18px] text-white font-[500]">${data.current_price}(current price)</div>
                <div className="kh-oldp text-[18px] text-white font-[700]">${data.old_price}(old price)</div>
    
            </div>
        </div>
        ))
    }
   
  </div>
  </>
  )
}

export default SecKH