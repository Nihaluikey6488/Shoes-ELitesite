import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
const navigate=useNavigate()
  
    return (
        <div className='px-18 py-5'>
            <div className='flex justify-between '>


                <div className='flex flex-col justify-between  capitalize font-medium gap-10'>
                    <div>
                        <h3 className='text-md'>resource</h3>
                    </div>
                    <div className='text-sm  text-[#636363] flex flex-col gap-3'>
                        <h4>find a store</h4>
                        <h4>become a member</h4>
                        <h4>running shoe finder</h4>
                        <h4>product</h4>
                        <h4>nike coaching</h4>
                        <h4>send us feedback</h4>
                    </div>
                </div>

                <div className='flex flex-col justify-between  capitalize font-medium gap-10'>
                    <div>
                        <h3 className='text-md'>help</h3>
                    </div>
                    <div className='text-sm  text-[#636363] flex flex-col gap-3'>
                        <h4>get help</h4>
                        <h4>order statusr</h4>
                        <h4>delivery</h4>
                        <h4>returns</h4>
                        <h4>payment options</h4>
                        <h4>contact us on shoes.lite inquiries</h4>
                        <h4>contact us on all other inquiries</h4>
                    </div>
                </div>

                <div className='flex flex-col justify-between  capitalize font-medium gap-10'>
                    <div>
                        <h3 className='text-md'>company</h3>
                    </div>
                    <div className='text-sm  text-[#636363] flex flex-col gap-3'>
                        <h4>about shoes.lite</h4>
                        <h4>news</h4>
                        <h4>carrers</h4>
                        <h4>investors</h4>
                        <h4>sustainability</h4>
                        <h4>impact</h4>
                        <h4>report a concern</h4>
                    </div>
                </div>
                <div className='flex w-100   capitalize font-medium  justify-end gap-2'>

                    <h3 className='text-md  text-[#636363]'><i class="ri-global-line"></i></h3>
                    <h3 className='text-md  text-[#636363]'>India</h3>


                </div>



            </div>
            <div>

            <div className='flex gap-5 font-medium  my-25 justify-between items-center '>
                <div className='flex gap-5 text-[#565656dc]' >

                <h4>© 2026 Nike, Inc. All rights reserved</h4>
                <h4>Guides</h4>
                <h4>Terms of Sale</h4>
                <h4>Terms of Use

                </h4>
                <h4>Nike Privacy Policy

                </h4>
                <h4>
                    Privacy Settings</h4>
                </div>
            <div >
                <i className="ri-arrow-up-long-line text-4xl" onClick={()=>{
                    navigate('/')
                }}></i>
            
            </div>
            </div>
            </div>

        </div>


    )
}

export default Footer
