import React  from 'react'
import ListItems from '../components/ListItems'
import Search from '../components/Search'
import Topic from '../components/Topic'

const Productslist = () => {

  return (
    <>
      <Search/>
      <div className='main__layout'>
        <div className='grid-layout' style={{width:'1020px',margin:'auto',display:'flex'}}>
        <ListItems/>
        <Topic/>
        </div>
      </div>
    </>
  )
}

export default Productslist