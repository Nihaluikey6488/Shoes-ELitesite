import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full bg-[#FFFFFF] text-black  fixed top-0 z-40'>
            <nav className='flex justify-between items-center shadow-xl py-4 px-10 '>
                <div className='flex items-center gap-15 text-xl font-semibold font-[family-name:libra] '>
                      <NavLink to="/" className={"tracking-wide"} style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none",
                        fontWeight: isActive ? "bold" : "normal",
                     
                    })}>Home</NavLink>

                
                    <NavLink to="/men" className={"tracking-wide"} style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none",
                        fontWeight: isActive ? "bold" : "normal",
                    })}>Men</NavLink>
                    <NavLink to="/women" className={"tracking-"} style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none",
                        fontWeight: isActive ? "bold" : "normal",
                    })}>Women</NavLink>


                </div>
                <div className='w-[40px]'>
                   <img src="https://i.pinimg.com/736x/76/31/8c/76318cbaebf3351de4065e6f831413f2.jpg" alt="" />
                </div>
                <div className='flex items-center gap-12'>
                    <div className='border-1 py-1 px-4 rounded-3xl flex gap-2' >
                        {/* <input type="text" name="" id="" placeholder='What are you looking for' className='text-xs border-none outline-none' /> */}
                        {/* <h4><i class="ri-search-line"></i></h4>
                        <h4><i class="ri-mic-fill"></i></h4> */}
                    </div>

                    <NavLink to="/profile"><h3><i className="ri-account-circle-fill text-2xl"></i></h3></NavLink>
                    <NavLink to="/cart"> <h3><i className="ri-shopping-cart-line text-2xl"></i></h3></NavLink>


                </div>
            </nav>

        </div>
    )
}

export default Navbar
