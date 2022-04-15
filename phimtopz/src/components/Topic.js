import React, { useEffect, useState } from 'react'
import {BsFillBookmarkFill} from 'react-icons/bs'
import { tagList } from '../data'
import productApi from '../api/productApi'
import {Link} from 'react-router-dom'

const Topic = () => {
  const [productList, setProductList] = useState([]);
  const [typeList, setTypeList] = useState('HORROR');
  useEffect(() => {
    // console.log('acs');
  const fetchProductList = async () => {
    try {

      const response = await productApi.getAll();
      setProductList(response)
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  }
  fetchProductList();
  }, []);
  const switchType = (ele)=>{
    // console.log(ele);
    setTypeList(ele)
    console.log('type: ',typeList);
  }
  return (
      <div className='topic__content'>
        <div className='topic__content__top'>
          <div className='caption'>
            <BsFillBookmarkFill/>
            <h2>Tu Phim Cua Ban</h2>
            </div>
          <span className='desc'>Tủ Phim của bạn trống rỗng. Sử dụng nút
                [  Thêm Vào Tủ ] ở mỗi phim để lưu lại
                những bộ phim mà bạn yêu thích</span>
        </div>
        <div className='topic__content__center'>
          <div className='caption'>
              <BsFillBookmarkFill/>
              <h2>Phim Xem Nhieu</h2>
          </div>
          <div className='content'>
            <div className='content__router'>
              <p 
              value='ACTION'
              onClick={(e)=> switchType(e.target.innerText)}
              >ACTION</p>
              <p
              value='HORROR'
              onClick={(e)=> switchType(e.target.innerText)}
              >HORROR</p>
              <p
              value='FANTASY'
              onClick={(e)=> switchType(e.target.innerText)}>FANTASY</p>
            </div>
            <div className='content__list'>
              {(productList).map((item)=>(
                typeList === item.type ? 
                <Link key={item.id} to={`/productdetail/${item.id}`} className='link-item'>
                  <div  className='content__list__right'>
                    <img src={item.img} alt=''/>
                    <div>
                      <h2>{item.name}</h2>
                      <p>{item.nation}</p>
                      <span>{item.time}</span>
                    </div>
                  </div>
                </Link>
                : <div key={item.id}></div>
              ))}
            </div>
          </div>
        </div>
        <div className='topic__content__bottom'>
          <div className='topic__content__bottom__tags'>
            <div className='caption'>
                <BsFillBookmarkFill/>
                <h2>Tags</h2>
            </div>
            <div className='taglist'>
                {tagList.map((item)=>(
                  <p key={item}>{item}</p>
                ))}
            </div>

          </div>
        </div>
      </div>
  )
}

export default Topic