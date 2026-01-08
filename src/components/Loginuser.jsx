import React from 'react'
import { useNavigate } from 'react-router-dom'

const Loginuser = () => {
  const navigate=useNavigate();
  return (
    <div className='  w-screen h-screen bg-[#f1efef] flex justify-center items-start' >
   <div>
       <div className='w-110 h-120 bg-white'>
        <div className='mt-25'>
            <div className='flex p-10 justify-center flex-col items-center gap-5'>
                <h2 className='text-md tracking-wide font-medium'>Login with the Shoes-Lite</h2>
                <div className='uppercase flex border-1 w-full  justify-between  cursor-pointer'>
                    <h3 className='bg-[#117A7A] w-1/2 py-3 px-15 border-r-1 text-md font-medium text-white '>login</h3>
                   <a onClick={()=>{
                    navigate('/profile/user/register')
                   }} >
                     <h3 className='w-1/2 py-3 px-15'>register</h3>
                   </a>
                </div>
                <div className='border-1 w-full h-70 py-4 flex flex-col justify-between items-center bg-[#f1efef]'>
                    <div className='flex px-10 py-2 w-full justify-between '>
                        <div className='flex gap-2 items-center bg-white px-4 py-2 rounded-md cursor-pointer'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxOMUNq_G-2Tqqcm2l1UYB3WCjRHx6KI2xg&s" alt="" className='w-[16px] h-[16px] object-center object-cover1'/>
                            <h5 className=' border-l-1 px-2 text-xs font-medium'>Facebook</h5>
                        </div>
                        <div className='flex gap-2 items-center bg-white px-4 py-2 rounded-md cursor-pointer'>
                         <a href="google.com"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzf-mFSVPG0NB4zca3DW3zh0EEgYKyyjrmNg&s" alt="" className='w-[16px] h-[16px] object-center object-cover'/></a>
                            <h5 className=' border-l-1 px-2 text-xs font-medium'>Google</h5>
                        </div>
                    </div>
                    <div>
                        <h2 className='tracking-widest font-medium text-xs'>-OR-</h2>
                    </div>

                   <div className='w-full px-8 flex flex-col gap-5'>
                     <div className=''>
                        <input type="text" placeholder='Enter Phone Number' required className='bg-white w-full py-1 text-md pl-2 rounded-md  outline-none' />
                    </div>
                    <div>
                        <button className='bg-red-500 py-1 rounded-md text-white font-bold w-full active:scale-95 cursor-pointer'>PROCEED</button>
                    </div>
                   </div>
                   <div className='flex gap-2'>
                    <h3 >New User ? </h3>
                    <a onClick={()=>{
                    navigate('/profile/user/register')
                   }} className='text-red-500 underline cursor-pointer'>Create Account</a>
                   </div>

                
                    
                </div>
            </div>
        </div>

      </div>
   </div>
    </div>
  )
}

export default Loginuser
