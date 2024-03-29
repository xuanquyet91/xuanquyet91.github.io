import React from 'react'
import {IoMdArrowDropright} from 'react-icons/io'
import { sliderItems } from '../data'

const ListItems = () => {
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
      <div className='listItems'>
        {sliderItems.map((item)=>(
          <div key={item.id} className='listItems__detail'>
            <img src={item.img} alt="" />
            <p>{item.title}</p> 
            <span>{item.episode}</span> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListItems