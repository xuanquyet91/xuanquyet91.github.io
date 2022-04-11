import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({productList}) => {

  return (
    <div className='Item'>
      {productList?.map((item)=>(
        <div key={item.id} className='Item__detail'>
          <Link to={`/productdetail/${item.id}`} className='link-item'>
            <img src={item.img} alt="" />
            <p>{item.name}</p> 
            <span>{item.type}</span> 
          </Link>
        </div>
      ))}
    </div>

  )
}

export default Item