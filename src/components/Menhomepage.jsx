import React, { useState } from 'react'

const Menhomepage = () => {
    
  
     let slides = [
         "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_copy_lMHwibA.jpg?w=1500&dpr=2",
         "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_banner_2_-_Naruto__copy_2_Em9oGmT.jpg?w=1500&dpr=2",
         "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Home_Page_Banner_RAztBMH.jpg?w=1500&dpr=2",
        


         
  
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
  
                  <div className="overflow-auto w-screen h-full " id='slider'>
                      <div 
                          className="flex "
                          style={{ transform: `translateX(-${current * 100}%)` }}
                      >
                          {slides.map((img, index) => (

                            <img src={img} alt=""  className='w-screen h-full  object-center  object-cover relative'/>
                              
                            //   <video src={img} className='w-screen h-full  object-center  object-cover relative' muted autoPlay loop></video>
                          ))}
                      </div>
                  </div>
                  <div className=' bottom-15 right-10'>
                         <div className='flex gap-2 '>
                       <div>
                      <button onClick={prevslide} className='text-[#fff8f8] rounded-full text-4xl flex justify-center items-center absolute top-[40%] left-5 '><i class="ri-arrow-left-s-line"></i></button>
                  </div>
                  <div>
                      <button onClick={nextSlide}  className=' text-[#ffffff]  rounded-full text-4xl flex justify-center items-center absolute top-[40%] right-5 '><i class="ri-arrow-right-s-line"></i></button>
                  </div>
                  </div>
                 
                  </div>
               
              </div>
          </div>
      )
}

export default Menhomepage
