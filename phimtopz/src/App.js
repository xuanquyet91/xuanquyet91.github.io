import React from "react";
// import React,{ useEffect, useState }  from "react";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { routes } from './router';
import './css/main.scss';
import { useAuth0 } from '@auth0/auth0-react';
// import productApi from './api/productApi';


function App() {
  // const [productList, setProductList] = useState([]);

  // useEffect(() => {
  // const fetchProductList = async () => {
  //   try {
  //     const params = { _page: 1, _limit: 10 };
  //     const response = await productApi.getAll(params);
  //     console.log('Fetch products successfully: ', response);
  //     setProductList(response.data);
  //   } catch (error) {
  //     console.log('Failed to fetch product list: ', error);
  //   }
  // }
  // fetchProductList();
  // }, []);

  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App" >
      <BrowserRouter>
        <>
          <Routes>
            {routes.map(
                ({ Element, Layout,children, path }, key) => {
                  return (
                    <Route key={key} element={<Layout />}>
                      <Route path={path} element={<Element />} />
                    </Route>
                  );
                }
              )}
          </Routes>
        </>  
      </BrowserRouter>  
    </div>
  );
}

export default App;
