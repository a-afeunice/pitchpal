import React from 'react'
import K from '../constants'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div>
            <h1>PitchPal</h1>
        </div>
        <div className='flex flex-col'>
        {K.NAVLINKS.map(({icon, text, link}, index) => (
          <NavLink
          to={link}
          key={index}
          className={({ isActive }) =>
            `flex gap-x-4 items-center hover:bg-blue-600 hover:rounded-md p-2 ${
              isActive ? " text-black" : ""
            }`
          }
          end
        >
          <span className="p-2 rounded-full">
            {icon}
          </span>
          <span>{text}</span>
        </NavLink>   
        ))}
        </div>
    </div>
  )
}

export default Sidebar