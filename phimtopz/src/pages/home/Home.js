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
  function testImage(URL) {
    var tester=new Image();
    tester.onload=imageFound;
    tester.onerror=imageNotFound;
    tester.src=URL;
}

function imageFound() {
    alert('That image is found and loaded');
}

function imageNotFound() {
    alert('That image was not found.');
}
  return (
    <>
      

    {/* {testImage("http://foo.com/bar.jpg")} */}
      <Slider productList={productList}/>
      <Container productList={productList}/>
    </>
  )
}

export default Home