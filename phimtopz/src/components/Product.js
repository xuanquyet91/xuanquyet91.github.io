import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBookmarkStarFill} from 'react-icons/bs'

const Product = () => {
  const [collapse,setCollapse] = useState(true)
  const handleCollapse = ()=>{
    return setCollapse(!collapse)
  }

  return (
    <div className='product'>
      <div className='product__content'>
        <div className='product__content__left'>
          <img src="https://phimtopz.com/upload/images/2012/5/sat-thu-john-wick-3-thumbnail.jpg" alt=''/>
          <div className='btn'>
            <button>Thêm vào tủ</button>
            <button>Xem phim</button>
          </div>
        </div>
        <div className='product__content__right'>
          <h1>Sát Thủ John Wick 3</h1>
          <p>John Wick: Chapter 3 – Parabellum (2019)</p>
          <p>Đang phát:Tập Full Vietsub</p>
          <p>Đạo diễn: <span>Chad Stahelski</span></p>
          <p>Thể loại: <span>Hình sự, Hành động</span></p>
          <p>Quốc gia: <span>Mỹ</span></p>
          <p>Thời lượng: 130 phút</p>
          <p>Lượt xem: 16,476</p>
          <p>Năm xuất bản: <span> 2019</span></p>
          <div className='social'>
            <button>Thích 156</button>
            <button>Chia sẻ</button>
          </div>
          <div className='rate'>
            <p>6.3</p>
            <div className='star'>
              <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
              <span>14 Lượt đánh giá</span>
            </div>
          </div>
        </div>
      </div>
      <div className='product__desc'>
        <div className='title'>
          <BsFillBookmarkStarFill/>
          <h1>NỘI DUNG PHIM</h1>
        </div>
        <span>Sát Thủ John Wick 3 – John Wick: Chapter 3 – Parabellum (2019) </span>
        <p>Nội dung lần này nối tiếp câu chuyện trong John Wick phần 2, 
        khi anh vừa ra tay kết liễu tên Santino D'Antonio trong khách sạn Continental.
        Điều này đã vi phạm điều luật của hội sát thủ và bắt buộc phải đẩy anh vào án tử lên đến 14 triệu đô,
        đồng thời khiến cho mọi sát thủ tồn tại trên đời đều muốn nhắm vào cái đầu của John. 
        Cả phần phim sẽ là cuộc trốn chạy đẫm máu của John khỏi những kẻ đứng đầu hệ thống ngầm này.</p>
      </div>
      <div className='product__img'>
        {collapse?false: <img src='https://phimtopz.com/upload/images/2000/1/sat-thu-john-wick-3-cover.jpg' alt=''/>}
        <div className={collapse? "panel-collapse": "panel-close"}>
        <button onClick={handleCollapse}>{collapse? "Xem Thêm": "Thu Gọn"}</button>
        </div>
      </div>
    </div>
  )
}

export default Product