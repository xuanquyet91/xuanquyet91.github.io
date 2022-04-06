import React from 'react'

const ItemCategory = ({productList}) => {

  return (
    <div className='ItemCategory'>
      {productList?.map((item)=>(
        <div key={item.id} className='ItemCategory__detail'>
          <img src={item.img} alt="" />
          <p>{item.name}</p> 
          <span>{item.type}</span> 
        </div>
      ))}
    </div>
  )
}

export default ItemCategory