import React, { useEffect, useState } from 'react'
import {BsFillBookmarkFill} from 'react-icons/bs'
import { tagList } from '../data'
import productApi from '../api/productApi'
import {Link} from 'react-router-dom'

const Topic = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    // console.log('acs');
  const fetchProductList = async () => {
    try {
      // const params = { _page: 1, _limit: 10 };
      const response = await productApi.getAll();
      // console.log('Fetch products successfully: ', response);
      setProductList(response)

    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  }
  fetchProductList();
  }, []);

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
              <p>Phim Lẻ</p>
              <p>Phim Bộ</p>
              <p>Hoạt Hình</p>
            </div>
            <div className='content__list'>
              {(productList.slice(0,10)).map((item)=>(
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