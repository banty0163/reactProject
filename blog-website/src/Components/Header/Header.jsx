import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div className='flex justify-between items-center bg-white p-4 shadow-md'>
     <div>
     <img src="" alt="logo" />
     <p>LogoName</p>
     </div>

    <div>
      <ul className='flex gap-4'>
        <li>
          <NavLink to="/">Home</NavLink>
          </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
          </li>
        <li>
          <NavLink to="/about">About</NavLink>
          </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
          </li>
      </ul>
    </div>
    
    </div>
  )
}

export default Header