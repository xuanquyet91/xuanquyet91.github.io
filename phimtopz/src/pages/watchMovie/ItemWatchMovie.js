import React from 'react'
import { Link } from 'react-router-dom'

const ItemWatchMovie = ({productList}) => {
  // console.log('abc',typeMovie);
  return (
    <div className='ItemWatchMovie'>
      {productList?.map((item)=>(
        <div key={item.id} className='ItemWatchMovie__detail'>
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

export default ItemWatchMovie