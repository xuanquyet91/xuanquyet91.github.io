import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../../pages/admin/HeaderAdmin';
import NavAdmin from '../../pages/admin/NavAdmin';
import { Outlet } from 'react-router-dom'
import productApi from '../../api/productApi';
import userApi from '../../api/userApi';

const AdminLayout = () => {
  const [productList, setProductList] = useState([]);
  const [userList, setUserList] = useState([]);
 
  useEffect(() => {
  const fetchProductList = async () => {
    try {
      // const params = { _page: 1, _limit: 10 };
      const response = await productApi.getAll();
      const responseUser = await userApi.getAll();
      // console.log('Fetch products successfully: ', response);
      // console.log('Fetch products successfully: ', responseUser);
      setProductList(response)
      setUserList(responseUser)
    } catch (error) {
      // console.log('Failed to fetch product list: ', error);
    }
  }
  fetchProductList();
  }, []);
  // console.log(productList);
  // console.log(userList);
  return (
    <div className="admin">        
        <HeaderAdmin/>
        <div className='admin__dashboard'>
            <NavAdmin/>
            <div className='admin__dashboard__table' >
              <Outlet 
              context={productList}
              />
              <Outlet 
              context={userList}
              />
            </div>
        </div>
    </div>
  )
}

export default AdminLayout