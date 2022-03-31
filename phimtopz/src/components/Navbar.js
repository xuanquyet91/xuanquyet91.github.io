import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const category = ['Âm Nhạc','Bí Ẩn','Siêu Nhiên','Chiến Tranh','Cổ Trang','Đam Mỹ','Drama','Gây Cấn'];
  const title = ['THỂ LOẠI','QUỐC GIA','PHIM LẺ','PHIM BỘ','HOẠT HÌNH','PHIM HAY','CHIẾU RẠP','ALBUM PHIM']

  return (
    <div className='navbar'>
      {/* <Link to="/Productslist" className="link-item"> */}
        <div className='navbar--container'>
            <AiOutlineHome style={{fontSize:'25px', color:'white'}} />
            {title.map((item,index)=> (
              <ul key={index} className='navbar--container--ul'> 
                <li>
                  <Link to="/Productslist" className="link-item">
                  <span>{item}</span>
                  </Link>
                  <ul className='navbar--container--nav'>
                    {category.map((itemSub,index) => (
                      <li key={index} className='navbar--container--sub'>{itemSub}</li>
                      ))}
                  </ul>
                </li>
              </ul>
            ))}
        </div>
      {/* </Link> */}
    </div>
  )
}

export default Navbar