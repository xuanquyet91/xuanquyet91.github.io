import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { sliderImg, sliderItems } from '../data';
import ListItems from './ListItems';
import Topic from './Topic';


const Container = () => {
  console.log(sliderItems);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='container'>
      <div className='container__left'>
        <div className='container__left__poster'>
          <Carousel responsive={responsive}>
            {sliderImg.map((item)=>(
              <img src={item.img} key={item.id} alt=''/>
            ))}
          </Carousel>
        </div>
        <div className='container__left__content'>
            <ListItems/>
            <ListItems/>
            <ListItems/>
        </div>
      </div>
      <div className='container__right'>
        <div className='container__right__topicTop'>
          <img src='https://kenh14cdn.com/thumb_w/640/2019/12/17/fast-furious-141000x625-1576517551701988605530-crop-1576517569941241743899.jpg' alt=''/>
          <img src='https://i.imgur.com/Yl1FFPE.jpeg' alt=''/>
        </div>
        <Topic/>
      </div>
    </div>
  )
}

export default Container