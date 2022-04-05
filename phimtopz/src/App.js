import React from "react";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { routes } from './router';
import './css/main.scss';
import { useAuth0 } from '@auth0/auth0-react';
// import productApi from './api/productApi';


function App() {

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
