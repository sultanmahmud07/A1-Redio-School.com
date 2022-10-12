import React, { useState } from 'react';
import './Header.css';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router-dom';
import { HomeModernIcon } from '@heroicons/react/24/solid'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className='shadow-sm p-3 mb-5'>
      <div className='d-flex justify-content-between container'>
      <div className='logo-box'>
        <span><HomeModernIcon className="header-icon"/></span>
        <span className='header-text'>A1 <span className='r'>R</span>edio</span>
        
      </div>
      <div className="manu-bar d-flex flex-column text-end">
       <div onClick={() => setOpen(!open)} className="sizing d-block d-md-none">
       {
          open ? <XMarkIcon/> : <Bars3Icon/>
        }
       </div>
      
        <ul className={`d-md-flex d-md-block ul-d ${open ? 'd-block' : 'd-none'}`}>

          <li><NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink></li>
          <li><NavLink to='/topics'>Topics</NavLink></li>
          <li><NavLink to='/statastics'>Statastics</NavLink></li>
          <li><NavLink to='/blog'>Blog</NavLink></li>
          <li><NavLink to='/example'>Others</NavLink></li>
          {/* <li><NavLink to='/rrr'>rrr</NavLink></li> */}
        </ul>
        
      </div>
      </div>
    </nav>
  );
};

export default Header;