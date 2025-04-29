import React from "react";
import {NavLink} from 'react-router-dom'
export default function Header(){
    return(
      <>
        <div>
        <h1>this is header section </h1>
        </div>
        <div>
            <NavLink 
            to='/'>
              Home
            </NavLink>
            <NavLink 
            to='/about' className='text-gray-600 text-4xl'>
             About
            </NavLink>
      
        </div>
       </>

    );
}