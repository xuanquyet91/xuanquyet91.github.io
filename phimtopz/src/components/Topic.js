import React from 'react'
import {BsFillBookmarkFill} from 'react-icons/bs'
import { sliderItems, tagList } from '../data'

const Topic = () => {
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
            {sliderItems.map((item)=>(
              <div key={item.id} className='content__list__right'>
                <img src={item.img} alt=''/>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>{item.view}</span>
                </div>
              </div>
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