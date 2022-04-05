import React from 'react'
import {IoMdArrowDropright} from 'react-icons/io'
import { Link } from 'react-router-dom'


const ListItems = ({productList}) => {

  return (
      <div className='container__left__content__listItems'>
        <div className='title'>
          <div className='title__left'>
            <span>PHIM BỘ MỚI CẬP NHẬT</span>
          </div>
          <div className='title__right'>
          <span>xem tất cả</span> 
          <IoMdArrowDropright/></div>
        </div>
        <Link to='/productdetail' className='link-item'>
          <div className='listItems'>
            {productList?.map((item)=>(
              <div key={item.id} className='listItems__detail'>
                <img src={item.img} alt="" />
                <p>{item.name}</p> 
                <span>{item.type}</span> 
              </div>
            ))}
          </div>
        </Link>
      </div>
  )
}

export default ListItems