import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({productList,item}) => {
  return (
    <div className='category'>
    {productList?.map((ele)=>(
      ele.type === item.type ? 
          <div key={ele.id} className='category__detail'>
            <Link to={`/productdetail/${ele.id}`} className='link-item'>
              <img src={ele.img} alt="" />
              <p>{ele.name}</p> 
              <span>{ele.type}</span> 
            </Link>
          </div>
         : <div key={ele.id}></div>
        )
    )}
  </div>
  )
}

export default Category