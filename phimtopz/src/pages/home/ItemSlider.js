import React from 'react'

const ItemSlider = ({item}) => {

  return (
    <div>
      <img src={item.img} alt="" />
      <p>{item.name}</p> 
      <span>{item.type}</span> 
    </div>
  )
}

export default ItemSlider