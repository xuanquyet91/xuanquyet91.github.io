import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { sliderItems } from '../data'
import {BsListUl} from  'react-icons/bs';

const Sliders = () => {
  // console.log(sliderItems);
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
    <div className='slider'>
      <div className='slider__title'>
          <BsListUl/>
          <span>NEW ESPOSIDE</span>
      </div>
      <div className='slider__body' >
        <Carousel responsive={responsive}>
            {sliderItems.map((item)=>(
              <div key={item.id} className='slider__body__item'>
                <img src={item.img} alt="" />
                <p>{item.title}</p> 
                <span>{item.episode}</span> 
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Sliders