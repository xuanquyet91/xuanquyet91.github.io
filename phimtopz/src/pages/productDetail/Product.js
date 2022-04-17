import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'

const Product = ({productList}) => {
  const {productId} = useParams()
  const productItem = productList.find(prod => prod.id === productId)
  console.log(productList,productItem,productId);
  const [collapse,setCollapse] = useState(true)
  const handleCollapse = ()=>{
    return setCollapse(!collapse)
  }

  return (
      <div className='product'>
        <div className='product__content'>
          <div className='product__content__left'>
            <img src={productItem?.img} alt=''/>
            <div className='btn'>
              <button>Thêm vào tủ</button>
              <Link to={`/watch-movie/${productItem?.id}`}>
                <button style={{'backgroundColor': '#c9302c'}}>Xem phim</button>
              </Link>
            </div>
          </div>
          <div className='product__content__right'>
            <h1>{productItem?.name}</h1>
            <p>Channel:<span>{productItem?.channel}</span></p>
            <p>Director: <span>{productItem?.directors}</span></p>
            <p>Actor: <span>{productItem?.actor}</span></p>
            <p>Type: <span>{productItem?.type}</span></p>
            <p>Nation: <span>{productItem?.nation}</span></p>
            <p>Time: <span>{productItem?.time}</span></p>
            <p>View: <span>{productItem?.view}</span> </p>
            <p>Year: <span> {productItem?.year}</span></p>
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
          <span>{productItem?.name} </span>
          <p>{productItem?.desc}</p>        
        </div>
        <div className='product__img'>
          {collapse?false: <img src={productItem?.img} alt=''/>}
          <div className={collapse? "panel-collapse": "panel-close"}>
          <button onClick={handleCollapse}>{collapse? "Xem Thêm": "Thu Gọn"}</button>
          </div>
        </div>
      </div>
  )
}

export default Product