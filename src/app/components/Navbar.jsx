"use client"
import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';
import { authClient } from '../lib/auth-client';
import Image from 'next/image';

const Navbar =()=> {
  const {data}= authClient.useSession()
      const user=data?.user
     
    const links=<>
   <li><Navlink href="/">Home</Navlink></li>
   <li><Navlink href="/courses">Courses</Navlink></li>
   <li><Navlink href="/profile">My profile</Navlink></li>
    
    </>
    return (
  <div className='px-4'>
          <div className="navbar w-full lg:w-6/7 lg:mx-auto mt-3 md:mt-4 rounded-4xl bg-[rgb(40,43,40)] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

            {
                links
            }
     </ul>
    </div>
    <p className="btn btn-ghost sm:text-xl">Skill <span className='text-[rgb(190,247,34)] border px-2 py-1 border-[rgb(190,247,34)]'>Sphere</span></p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
        links
    }
    </ul>
  </div>
  <div className="navbar-end">
  <div className='justify-center gap-2 md:gap-3 flex items-center '>
    {
      user ?
       
       <p className='text-sm sm:text-[16px] text-center'>{user.name}</p>  : ""   }
  <div>
     {
    user ?   <button onClick={()=>authClient.signOut()} className="px-3 py-1 text-black rounded-xl border border-[rgb(151,247,34)] pb-2 bg-[rgb(164,221,6)]">Logout</button>
   :   <Link href="/signIn" className="px-3 py-1 text-black rounded-xl border border-[rgb(151,247,34)] pb-2 bg-[rgb(164,221,6)]">Login</Link>}
  
</div>
  </div></div></div>
  </div>)}

export default Navbar;