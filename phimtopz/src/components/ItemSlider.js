import React from 'react'

const ItemSlider = ({item}) => {
  return (
    <>
      <img src={item.img} alt="" />
      <p>{item.name}</p> 
      <span>{item.type}</span> 
    </>
  )
}

export default ItemSlider