import React, {useState, useEffect} from 'react'

import {Link}  from 'react-router-dom'
import { navLinks } from '../constants'
const MyNav = () => {
    const [isActive, setIsActive] = useState("")
    
  return (
   <nav className='flex items-center max-w-7xl mx-auto'>
    <div>
        <Link to='/'  className='flex items-center gap-2'  onClick={() => {
            setIsActive("")
            window.scrollTo(0, 0)
        }}>
            <img src="./src/assets/mylogo1.png" className='bg-cover rounded-full shadow-sm shadow-lime-500 m-20 border-2 border-lime-600' 
             alt="my logo" />
            <p className='text-[18px] text-red-500'>I'm Alive <span className='text'>| Programmer</span></p>
        </Link>
    </div>

    <div>

        <ul>
        {navLinks.map((link) => {
        <li>
            <a href={`#${link.id}`}>{link.title}</a>
        </li>
        })}
        </ul>
       
    </div>
   </nav>
  )
}
export  { MyNav}