import React from 'react'
import Sidebar from '../../../components/sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
   <div className='flex'>
    <Sidebar/>
   <div className='w-full'>
   <Outlet/>
   </div>
   </div>
  )
}

export default DashboardLayout