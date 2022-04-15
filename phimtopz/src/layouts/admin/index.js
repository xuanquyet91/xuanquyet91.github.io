import React from 'react'
import HeaderAdmin from '../../pages/admin/HeaderAdmin';
import NavAdmin from '../../pages/admin/NavAdmin';
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className="admin">        
        <HeaderAdmin/>
        <div className='admin__dashboard'>
            <NavAdmin/>
            <div className='admin__dashboard__table' >
              <Outlet />
            </div>
        </div>
    </div>
  )
}

export default AdminLayout