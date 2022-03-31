import React from 'react'
import { Link } from 'react-router-dom';
import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {SiGmail} from 'react-icons/si';
import {BsArrowBarLeft} from 'react-icons/bs';


function Login() {

    return (
      <div className="login">
        <div className="login__container" >
          <div className="login__container__form">
            <form action="#">
                <h1>Sign in</h1>
                <div className="social-container">
                  <a href="#" className="social"><FaFacebook/></a>
                  <a href="#" className="social"><FcGoogle/></a>
                  <a href="#" className="social"><SiGmail/></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <span href="#">Forgot your password?</span>
                <button>Sign In</button>
                <div className='login__container__form__bottom'>
                  <Link to="/" className="link-item">
                    <BsArrowBarLeft/>
                  </Link>
                  <span href="#">Register Now.</span>
                </div>
            </form>
          </div>
        </div>
      </div>

    )
}

export default Login