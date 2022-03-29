import React from 'react'
import { AiOutlineSearch,AiOutlineMail } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
  <div className="header">
    <div className="header__left">
      <Link to="/" className="link-item">
        <img src='https://phimtopz.com/Theme/images/logo_ptz.png?v=1648193638' alt=''/>
        </Link>
    </div>
    <div className="header__center">
      <input type="text" placeholder="Search..." className="header__center__input" />
      <AiOutlineSearch/>
    </div>
    <div className="header__right">
      <div className="header__right__info">
        <AiOutlineMail/>
        <span>Liên Hệ</span>
      </div>
      <div className="header__right__fanpage">
        <FiFacebook/>
        <span>Fanpage</span>
      </div>
    </div>
  </div>

  )
}

export default Header