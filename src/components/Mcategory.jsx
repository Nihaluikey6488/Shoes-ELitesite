import React from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Mcategory = () => {

    const navigate=useNavigate();
    let cards = [
        {
            src:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/shirts_87B485X.jpg?w=480&dpr=2",
            name:"men footwear",
       

        },
        {
            src:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/2b_bcGZoNw.jpg?w=480&dpr=2",
            name:"women footwear",
        

        },
        {
            src:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/tshirts_Qq94UB0.jpg?w=480&dpr=2",
            name:"all low tops",
           


        },
        {
            src:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_5_copy_ePzhP4E.jpg?w=480&dpr=2",
            name:"all high tops",
            


        },
        {
            src:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/OFFICIAL_COLLABS_BoEXdAe.jpg?w=480&dpr=2",
            name:"offical collabs",
            


        },
        {
            src:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/TSS_ORIGINALS__5jqGf21.jpg?w=480&dpr=2",
            name:"tss originals",
            


        },
        {
            src:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_4_Mu42HC1.jpg?w=480&dpr=2",
            name:"hydros & slides",
            


        },
        {
            src:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_5_uK0q5YZ.jpg?w=480&dpr=2",
            name:"socks and laces",
            


        },

    ]
  return (
    <div>
             <div className='w-full my-10 px-4'>
                 <div className='flex flex-col  justify-center items-center font-[family:helvet] border-b-1'>
                     <h2 className='text-3xl uppercase font-bold mb-25'>categories</h2>
     
                     <div className='flex gap-1  flex-wrap  justify-center mt-5   overflow-hidden'>
                       {cards.map((elem)=>{
                         return   <div
                         onClick={()=>{
                            navigate("/men/category")
                         }}
                          id='men-cards' className=' w-95 h-120 capitalize p-2 overflow-hidden shrink-0 rounded-3xl'>
                             <img src={elem.src} alt="" className='w-full h-[80%] object- object-cover rounded-3xl ' />
                             <div className='mt-2 ml-2'>
                                
                             
                             </div>
     
                         </div>
                       })}
     
                     </div>
                 </div>


                 <Footer/>
     
     
                
     
             </div>
     
    </div>
  )
}

export default Mcategory
