import React, { useEffect, useState }  from 'react'
import productApi from '../api/productApi'
import ItemCategory from '../components/ItemCategory'
import Product from '../components/Product'
import Topic from '../components/Topic'


const Productdetail = () => {
  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    console.log('acs');
  const fetchProductList = async () => {
    try {
      // const params = { _page: 1, _limit: 10 };
      const response = await productApi.getAll();
      console.log('Fetch products successfully: ', response);
      setProductList(response)
      
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  }
  fetchProductList();
  }, []);
  return (
    <>
    <div className='main__layout'>
      <div className='grid-layout' style={{width:'1020px',margin:'auto',display:'flex'}}>
        <div>
          <Product/>
          <ItemCategory
          productList={productList}/>
        </div>
      <Topic/>
      </div>
    </div>
    </>
  )
}

export default Productdetail