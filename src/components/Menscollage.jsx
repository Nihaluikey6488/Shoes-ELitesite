import React, { useState } from 'react'

const Menscollage = () => {


    let slides = [
        "/videos/wall2.mp4",
        "/videos/wall1.mp4",
        "/videos/wall3.mp4",
        "/videos/wall4.mp4",
       

    ]


    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(
            current === slides.length - 1 ? 0 : current + 1)
    }
    const prevslide = () => {
        setCurrent(
            current === 0 ? slides.length - 1 : current - 1
        )
    }







    return (
        <div>
            <div className='w-screen h-full overflow-hidden'>

                <div id="slider-div" className="overflow-auto w-screen h-[95vh]">
                    <div
                        className="flex "
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {slides.map((img, index) => (
                            
                            <video src={img} className='w-screen h-full  object-center  object-cover relative' muted autoPlay loop></video>
                        ))}
                    </div>
                     <div className='absolute w-screen top-[55%] left-[50%] translate-[-50%] text-white tracking-tight font-[family-name:helvet] text-center leading-[0.7]'>
                    <h3 className='font-medium text-xl'>Step Into Style</h3>
                    <h2 className='font-bold text-[166px] tracking-tighter font-[family-name:helvet]'>Find Your Fit</h2>
                </div>
                </div>
                <div className='absolute bottom-18 right-10'>
                       <div className='flex gap-2 '>
                     <div>
                    <button onClick={prevslide} className='text-white h-12 w-12 bg-[#969694a7] rounded-full text-2xl flex justify-center items-center'><i class="ri-arrow-left-s-line"></i></button>
                </div>
                <div>
                    <button onClick={nextSlide}  className='text-white h-12 w-12 bg-[#969694a7]  rounded-full text-2xl flex justify-center items-center'><i class="ri-arrow-right-s-line"></i></button>
                </div>
               
                </div>
               
                </div>
             
            </div>
        </div>
    )
}

export default Menscollage
