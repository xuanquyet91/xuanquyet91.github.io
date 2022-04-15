import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({productList,item}) => {
  const newDataFilter = productList.filter((params)=> {
    return params.type===item.type
  })
  return (
    <div className='category'>
    {newDataFilter?.map((ele)=>(
          <div key={ele.id} className='category__detail'>
            <Link to={`/productdetail/${ele.id}`} className='link-item'>
              <img src={ele.img} alt="" />
              <p>{ele.name}</p> 
              <span>{ele.type}</span> 
            </Link>
          </div>
        )
    )}
  </div>
  )
}

export default Category