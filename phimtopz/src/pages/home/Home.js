import React,{useState,useEffect} from 'react'
import productApi from '../../api/productApi'
import Container from './Container'
import Slider from '../../pages/home/Slider'

const Home = () => {
  const [productList, setProductList] = useState([]);
 
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
  return (
    <>
      <Slider productList={productList}/>
      <Container productList={productList}/>
    </>
  )
}

export default Home