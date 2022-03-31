import React from "react";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { routes } from './router';
import './css/main.scss';
// import Home from './pages/Home';
// import Productslist from './pages/Productslist';
// import Layout from './layouts'
// import Productdetail from './pages/Productdetail';


function App() {
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
          {/* <Routes>
            <Route element={<Layout/>} >
              <Route path="/" element={<Home/>} />
              <Route path="/Products" element={<Productslist/>} />
              <Route path="/Detail" element={<Productdetail/>} />
            </Route>
          </Routes> */}
        </>  
      </BrowserRouter>  
    </div>
  );
}

export default App;
