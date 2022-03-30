import React from 'react'
import ListItems from '../components/ListItems'
import Product from '../components/Product'
import Topic from '../components/Topic'

const Productdetail = () => {
  return (
    <>
    <div className='grid-layout' style={{width:'1020px',margin:'auto',display:'flex'}}>
      <div>
        <Product/>
        <ListItems/>
      </div>
    <Topic/>
    </div>
    </>
  )
}

export default Productdetail