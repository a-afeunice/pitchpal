import React from 'react'
import { getDetails } from '../../services/config'
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {

  const {token} = getDetails();
  if (token)
    return 
      <Navigate to="/dashboard"/>
    
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default AuthLayout