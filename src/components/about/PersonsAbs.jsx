import React from 'react'

const PersonsAbs = ({img,name,role}) => {
  return (
    <div className='card'>
        <img src={img} alt="" className="pic card-img" />
        <div className="card-data">
            <div className="card-name">{name}</div>
            <div className="card-role">{role}</div>
        </div>
    </div>
  )
}

export default PersonsAbs