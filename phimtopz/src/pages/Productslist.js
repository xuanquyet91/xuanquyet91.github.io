import React, { useEffect, useState }  from 'react'
import productApi from '../api/productApi'
import Search from '../components/Search'
import Topic from '../components/Topic'
import ItemCategory from '../components/ItemCategory'

const Productslist = () => {
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
      <Search/>
      <div className='main__layout'>
        <div className='grid-layout' style={{width:'1020px',margin:'auto',display:'flex'}}>
          <ItemCategory 
          productList={productList}
          />
        <Topic/>
        </div>
      </div>
    </>
  )
}

export default Productslist