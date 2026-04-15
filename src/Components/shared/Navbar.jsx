import React from 'react';



import logo from '../../assets/logo.png'
import {  BarChart, ChartLine, Clock, House } from 'lucide-react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <>
       <div className="navbar gap-3 bg-base-100 shadow-sm py-4 md:px-9">
  <div className="flex-1">
<img src={logo} alt="Logo" srcset="" />
  </div>
  <div className="">
    <ul className="flex justify-center justify-items-center items-center gap-1 md:gap-5 ">
<li className='flex justify-center justify-items-center items-center gap-3'>
<House color="#7b706f" />
  <NavLink to={'/'} className={({isActive})=>isActive?'text-primary':'text-gray-500'}>Home</NavLink>
   </li>
<li className='flex justify-center justify-items-center items-center gap-3'>
    <Clock color="#7b706f" strokeWidth={2.25} />
    <span>TimeLine</span>
</li>
<li className='flex justify-center justify-items-center items-center gap-3'>
    <ChartLine color="#7b706f" strokeWidth={2.25} />
    <span>Stats</span>
</li>
    </ul>
  </div>
</div>
        </>
    );
};

export default Navbar;