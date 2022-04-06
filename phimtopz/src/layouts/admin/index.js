import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  // const itemsPerPage = 15;
  return (
    <>
      {/* <Outlet context={itemsPerPage}/> */}
      <Outlet />
    </>
  )
}

export default AdminLayout