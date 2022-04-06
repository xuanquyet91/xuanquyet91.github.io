import React from 'react'
import {IoMdArrowDropright} from 'react-icons/io'
import { Link } from 'react-router-dom'


const ListCategory = ({productList}) => {
  const captionCategory = [
    {name:'ACTION MOVIES',type:"ACTION"},
    {name:'HORROR MOVIES',type:"HORROR"},
    {name:'FANTASY MOVIES',type:"FANTASY"},
  ]

  return (
    <>
    {captionCategory.map((item,index)=> (
      <div className='container__left__content__listItems' key={index}>
        <div className='title'>
          <div className='title__left'>
            <span>{item.name}</span>
          </div>
          <div className='title__right'>
          <span>xem tất cả</span> 
          <IoMdArrowDropright/></div>
        </div>
        <Link to='/productdetail' className='link-item'>
          <div className='listItems'>
            {productList?.map((ele)=>(
              ele.type === item.type ? 
                <div key={ele.id} className='listItems__detail'>
                  <img src={ele.img} alt="" />
                  <p>{ele.name}</p> 
                  <span>{ele.type}</span> 
                </div>
                 : <div key={ele.id}></div>
                )
            )}
          </div>
        </Link>
      </div>
    ))}
  </>
  )
}

export default ListCategory