import React from 'react'
import { GiReturnArrow } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const HeaderAdmin = () => {
  return (
    <>
      <div className="admin__title">
          <Link to='/' className='link-item'>
              <img alt='true' src='https://phimtopz.com/Theme/images/logo_ptz.png?v=1649311521'/>
          </Link>
          <h2 className="display-3">Administrator</h2>
          <Link to='/' className='link-item'>
              <GiReturnArrow/>
          </Link>
      </div> 
    </>
  )
}

export default HeaderAdmin