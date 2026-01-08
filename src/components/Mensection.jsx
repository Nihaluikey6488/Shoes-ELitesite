import React from 'react'
import Mcategory from './Mcategory'

const Mensection = () => {

    let cards = [
        {
            src:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/top_selling_tiles_shoes_m7.jpg?w=360&dpr=2",
            name:"souled : viper",
            qual:"men high top sneakers",
            price:2599


        },
        {
            src:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1765001132_9925658.jpg?w=480&dpr=2",
            name:"Tactix: Black Panther Edition",
            qual:"turf football shoes",
            price:2599


        },
        {
            src:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1762508389_7163224.jpg?w=480&dpr=2",
            name:"Kanso V2: Beige",
            qual:"men low top sneakers",
            price:2599


        },
        {
            src:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1761928667_6669637.jpg?w=480&dpr=2",
            name:"UBZ Legacy: Blueprint",
            qual:"men low top sneakers",
            price:2599


        },

    ]
    return (
        <div className='w-full my-10 '>
            <div className='flex flex-col  justify-center items-center font-[family:helvet]'>
                <h2 className='text-3xl uppercase font-bold my-5'>fresh out the lab</h2>

                <div className='flex gap-2 mt-10'>
                  {cards.map((elem)=>{
                    return   <div className=' w-90 h-120 capitalize p-2 overflow-hidden'>
                        <img src={elem.src} alt="" className='w-full h-[80%] object-center object-cover rounded-3xl ' />
                        <div className='mt-2 ml-2'>
                            <h4 className='font-medium'>{elem.name}</h4>
                            <h5 className='text-[#777777]'>{elem.qual}</h5>
                            <h5 className='font-medium'>₹ {elem.price}</h5>

                        </div>

                    </div>
                  })}

                </div>
            </div>


            <Mcategory/>

        </div>
    )
}

export default Mensection
