import React, { useEffect, useState } from 'react'
import Hcollaborates from './Hcollaborates'
import Footer from './Footer'
import { useLocation, useNavigate } from 'react-router-dom'

const Menanchor = () => {


    const { state } = useLocation();
    const navigate = useNavigate();
    const [cart, setCart] = useState(()=>{
        return JSON.parse(localStorage.getItem("cart")) || []
    });
    const [addcart, setAddcart] = useState("add to cart");



    if (!state) {
        navigate("/men")
        return null;
    }
    
    const handleAddToCart=()=>{
        setCart((previous)=>[...previous,state])
    }

    useEffect(function(){
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    
    console.log(cart)



    return (
        <div className='mt-20 mx-10'>
            <div>
                <h3 className='text-[#777777] text-xs'>Home / Men Low Top Sneakers / The Souled Store /{state.name}c</h3>

                <div className='w-[90%] flex px-10 py-4 gap-15'>
                    <div className='w-1/2'>
                        <img src={state.src} alt="" />

                    </div>
                    <div>
                        <div className='py-4 capitalize border-b-1  '>
                            <h2 className='text-3xl text-[#333333ef] font-bold'>{state.name}</h2>
                            <h4 className='text-[#777777] text-xs font-medium'>{state.qual}</h4>
                        </div>
                        <div className='py-4'>
                            <h3 className='text-2xl font-bold text-[#333333ef]'>₹ {state.price}</h3>
                            <h5 className='text-md text-[#777777]'>Price incl. of all taxes</h5>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3>Shop by Variant/Look</h3>
                            <img src={state.src} alt="" className='w-[65px] border-1 p-1 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-4 py-4'>
                            <h3 className='text-xl font-medium'>Please select a size.</h3>
                            <div className='border-2 p-1 text-sm font-medium text-[#434343] rounded-md bg-[#aaaaaa80] flex justify-between px-2 uppercase outline-none border-none w-fit gap-2'>
                                <h4>uk: 6</h4>
                                <h4>uk: 7</h4>
                                <h4>euro: 40</h4>
                                <h4>length: 10.4</h4>
                            </div>
                            <div className='flex gap-2 uppercase'>
                                <h3 className='border-2 p-1 text-[#777777]'>uk 6</h3>
                                <h3 className='border-2 p-1 text-[#777777]'>uk 7</h3>
                                <h3 className='border-2 p-1 text-[#777777]'>uk 8</h3>
                                <h3 className='border-2 p-1 text-[#777777]'>uk 9</h3>
                                <h3 className='border-2 p-1 text-[#777777]'>uk 10</h3>
                                <h3 className='border-2 p-1 text-[#777777]'>uk 11   </h3>

                            </div>
                            <div className='flex  items-center gap-4'>

                                <h3 className='text-md text-[#777777]'>Quantity:{state.quantity} </h3>
                                <input type='number' name="" id="" className='w-10' />
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='bg-[#EC3D25] text-white font-medium px-10 py-2 rounded-md active:scale-95'>
                                    <button onClick={()=>{
                                        handleAddToCart();
                                        setAddcart("added")
                                    }} >{addcart}</button>
                                </div >
                                <div className='bg-[#1fa63a] text-white font-medium px-10 py-2 rounded-md active:scale-95'>
                                    <button
                                    >add to favourites</button>
                                </div>
                            </div>


                            <div className='flex gap-4 items-center'>
                                <h3 className='txt-3xl'>Share</h3>

                                <div className='text-[#777777] text-2xl flex gap-2'>
                                    <i class="ri-facebook-box-fill"></i>
                                    <i class="ri-instagram-fill"></i>
                                    <i class="ri-twitter-fill"></i>
                                    <i class="ri-threads-fill"></i>
                                </div>
                            </div>



                        </div>


                    </div>

                </div>

            </div>

            <Hcollaborates />
            <Footer />
        </div>
    )
}

export default Menanchor
