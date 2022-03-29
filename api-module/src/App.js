// import './App.css';
import { useEffect, useState } from 'react';
import productApi from './api/productApi';
import ProductList from './components/ProductList'

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
  const fetchProductList = async () => {
    try {
      const params = { _page: 1, _limit: 10 };
      const response = await productApi.getAll(params);
      console.log('Fetch products successfully: ', response);
      setProductList(response.data);
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  }
  fetchProductList();
  }, []);

  return <ProductList productList={productList} />;
  }

export default App;
