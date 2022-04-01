import React, { useState } from 'react'
import { AiOutlineLogin,AiOutlineUser } from 'react-icons/ai';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { sliderItems } from '../data';


const Header = () => {
  const { user,logout, isAuthenticated } = useAuth0();
  const [query, setQuery]= useState('');
  const keys= ['title'];

  // console.log(query);

  const search =(sliderItems) =>{
    return sliderItems.filter(item=>
      keys.some((key)=> 
        item[key].toLowerCase().includes(query)
      )
      );
  }
  // console.log(search(sliderItems));
  return (
  <div className="header">
    <div className="header__left">
      <Link to="/" className="link-item">
        <img src='https://phimtopz.com/Theme/images/logo_ptz.png?v=1648193638' alt=''/>
        </Link>
    </div>
    <div className="header__center">
      <div className='header__center__search'>
        <input type="text" placeholder="Search..." 
        onChange= {e=> setQuery(e.target.value)}
        className="header__center__search__input" />
        <ul >
            {search(sliderItems).map((item,index)=> (
              <li key={index}>{item.title}</li>
            ))}
        </ul>
      </div>
      {/* <AiOutlineSearch/> */}
    </div>
    <div className="header__right">
      <div className="header__right__info">
        {!isAuthenticated && (
         <> 
          <AiOutlineLogin/>
          <Link to='/Login' className="link-item">
            <span>Sign In</span>
          </Link>
        </>
        )}
        {isAuthenticated && (
          <>
          <Link to="/Admin" className="link-item">
          <p>{user.email}</p>
          </Link>
          <button onClick={() => logout()} className="log-out">
          Log Out
          </button> 
          {/* <JSONPretty data={user} /> */}
          </>
        )}
      </div>
      <div className="header__right__fanpage">
      {!isAuthenticated && (
         <> 
        <AiOutlineUser/>
        <Link to='/Register' className="link-item">
          <span>Register</span>
        </Link>
        </>)}
      </div>
    </div>
  </div>

  )
}

export default Header