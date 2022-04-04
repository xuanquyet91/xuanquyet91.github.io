import React from 'react'
import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
  const itemsPerPage = 15;
  return (
    <>
      <Outlet context={itemsPerPage}/>
    </>
  )
}

export default LoginLayout