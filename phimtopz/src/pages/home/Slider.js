import React from 'react'
import { BsListUl } from 'react-icons/bs';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from 'react-router-dom';
import ItemSlider from './ItemSlider';

const Slider = ({productList}) => {
  const newDataSlider = productList.slice(0,8)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="main__layout">
      <div className='slider'>
        <div className='slider__title'>
            <BsListUl/>
            <span>NEW ESPOSIDE</span>
        </div>
        <div className='slider__body' >
          <Carousel responsive={responsive}>
              {newDataSlider.map((item)=>(
                <div  key={item.id} 
                  className='slider__body__item'>
                  <Link to={`/productdetail/${item.id}`} className='link-item'>
                      <ItemSlider 
                      item={item}/>
                  </Link>
                  </div>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Slider