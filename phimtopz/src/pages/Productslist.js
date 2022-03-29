import React from 'react'
import ListItems from '../components/ListItems'
import Topic from '../components/Topic'

const Productslist = () => {
  return (
    <>
    <div className='grid-layout' style={{width:'1020px',margin:'auto',display:'flex'}}>
    <ListItems/>
    <Topic/>
    </div>
    </>
  )
}

export default Productslist