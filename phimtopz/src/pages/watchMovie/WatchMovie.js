import React, { useEffect, useState } from 'react'
import productApi from '../../api/productApi';
import Item from '../../components/Item'
import {CgDanger} from 'react-icons/cg'
import { BsServer } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
// import { getWatchMovie } from './WatchMovie.sevice';

const WatchMovie = () => {
  const [productList, setProductList] = useState([]);
  const [isSelect,setIsSelect] = useState(true)
  const {Episode} = useParams()
  // const productEpisode = productList.find(prod => prod.id === Episode)
  const partButton = productList[Episode-1].link;
  console.log(partButton);
  useEffect(() => {
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

  // call api 
  // getData = async (params) => {
  //   const res = await getWatchMovie(params);
  //   if(res.status === '200') {
  //     set
  //   }
  // }
  const handlerSelect= (isSelect)=>{
    setIsSelect(!isSelect)
  }

  return (
    <div className='main__layout'>
      <div className='watchMovie'>
        <div className='watchMovie__play'>
          <div className='watchMovie__play__top'>
            <div className='watchMovie__play__top-Title'>
              <p className='title'>Click quảng cáo là góp phần giúp phát triển PhimTopZ.Com. Tắt chặn quảng cáo để xem được Phim Nhé Các Bạn!</p>
            </div>
            <div className='watchMovie__play__top-Note'>
              <p className='note'>NẾU PHIM LOAD CHẬM, TẢI NGAY ỨNG DỤNG VPN (1.1.1.1) TẠI ĐÂY ĐỂ CẢI THIỆN TỐC ĐỘ</p>
            </div>
          </div>
          <iframe width="1020" height="600" title="Watch Video" 
          src="https://www.youtube.com/embed/tgbNymZ7vqY"/>
          <div className='watchMovie__play__bottom'>
            <div className='watchMovie__play__bottom__option'>
              <button className='option__left'>VIETSUB</button>
              <div className='option__right'>
                <button>
                  <CgDanger/>
                </button>    
                <button>AUTO: NEXT</button>
                <button>OFF LIGHT</button>
              </div>
            </div>
            <div className='watchMovie__play__bottom__sever'>
              <p><BsServer/> Server</p>
              <button>Go #1</button>
              <button>HRX #2</button>
            </div>
            <div className='watchMovie__play__bottom__caption'>
              <div className='caption'>
                <h1>Bão Ngầm</h1>
                <span>Kênh vtv1 (2022)</span>
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
                  <span 
                  // onClick={()=> getData('aaa')} 
                  >14 Lượt đánh giá</span>
                </div>
              </div>
            </div>
            <div className='watchMovie__play__bottom__severAuto'>
              {partButton?.map((item,index)=> (
                <button key={index}
                className={isSelect?'selected':'non-selected'}
                onClick={()=>handlerSelect(isSelect)} 
                >{item.part}</button>
              ))}
            </div>
          </div>
        </div>
        <Item productList={productList.slice(0,12)}/>
      </div>
    </div>
  )
}

export default WatchMovie