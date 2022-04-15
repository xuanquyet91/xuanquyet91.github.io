import React from 'react'
import {IoMdArrowDropright} from 'react-icons/io'
import { Link } from 'react-router-dom'
import Category from './Category'

const ListCategory = ({productList}) => {
  const captionCategory = [
    {name:'ACTION MOVIES',type:"ACTION"},
    {name:'HORROR MOVIES',type:"HORROR"},
    {name:'FANTASY MOVIES',type:"FANTASY"},
  ]

  return (
    <>
    {captionCategory.map((item,index)=> (
      <div className='container__left__listCategory' key={index}>
        <div className='title'>
          <div className='title__left'>
            <span>{item.name}</span>
          </div>
          <div className='title__right'>
          <Link to={`/productslist/${item.type.toLowerCase()}`} className='link-item'>
            <span>xem tất cả</span> 
          </Link>
          <IoMdArrowDropright/></div>
        </div>
          <Category 
          item={item}
          productList={productList}/>
      </div>
    ))}
  </>
  )
}

export default ListCategory