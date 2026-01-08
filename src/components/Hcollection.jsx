import React, { useState } from 'react'

const Hcollection = () => {

    const items = [
        {
            id: 0,
            img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_632,c_limit/e073acf6-10a8-4b43-ae30-ddffce863a90/free-metcon-6-workout-shoes-Q3pWcF.png",
            name: "Nike Metcon 10",
            catagory: "Mens's Workout Shoes",
            price: "13 995.00"
        },
        {
            id: 1,
            img: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/e66c85aa-4c6b-449d-a8be-2ee8ff426766/AS++M+NP+TFADV+NPT+PANT.png",
            name: "Nike Pro Octa",
            catagory: "Men's Therma-FIT ADV Trousers",
            price: "7 195.00"
        },
        {
            id: 2,
            img: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/d44d50c7-5976-4609-b566-0615b3cc51b6/M+NIKE+METCON+10.png",
            name: "Nike Free Metcon 6",
            catagory: "Women's Workout Shoes",
            price: " 10 795.00"
        },
        {
            id: 3,
            img: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/8aa18e66-eccf-42ba-b524-67ccb9fd9b22/NIKE+IN-SEASON+TR+14.png",
            name: "Nike In-Season TR 14",
            catagory: "Mens's Workout Shoes",
            price: "6 295.00"
        },
        {
            id: 4,
            img: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/2affd7b1-666d-40e9-9f16-19e6a39fb080/W+NIKE+MIND+001.png",
            name: "Nike Mind 001",
            catagory: "Women's Pregame Mules",
            price: "8 495.00"
        },
        {
            id: 5,
            img: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/8d536400-c077-4281-8f2c-3bb6db5e383e/AS+W+NK+24.7+DF+HR+BARREL+PANT.png",
            name: "Nike 24.7 PerfectStretch",
            catagory: "Women's Dri-FIT High-Waisted Loose Barrel-Leg Trousers",
            price: " 5 695.00"
        },

    ]



    const [start, setStart] = useState(0);
    let visibleItems = 3

    const nextSlide = () => {
        if (start + visibleItems < items.length)
            setStart(start + 1)
    }
    const prevslide = () => {
        if (start > 0)
            setStart(start - 1)

    }




    return (
        <div>
            <div className='py-8 px-8'>
                <div className=' flex justify-between'>
                    <h2 className='text-3xl font-normal'>New Year, New You</h2>
                    <div className='flex items-center gap-3'>
                        <h3 className='font-medium'>Shop</h3>
                        <div className='flex gap-2 '>
                            <div>
                                <button onClick={prevslide} className='text-blacK h-12 w-12 bg-[#969694a7] rounded-full text-2xl flex justify-center items-center  hover:bg-[#d7d7d7a7]'><i class="ri-arrow-left-s-line"></i></button>
                            </div>
                            <div>
                                <button onClick={nextSlide} className='text-black h-12 w-12 bg-[#969694a7]  rounded-full text-2xl flex justify-center items-center hover:bg-[#d7d7d7a7]'><i class="ri-arrow-right-s-line"></i></button>
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div className="overflow-hidden mt-5">
                    <div
                        className="flex gap-4 transition-transform duration-500"
                        style={{
                            transform: `translateX(-${start * 336}px)`,
                        }}
                    >
                        {items.map((item) => (
                            <div key={item.id} className="w-120 flex-shrink-0">
                                <img
                                    src={item.img}
                                    alt=""
                                    className="w-full  object-cover h-100 "
                                />
                                <div className="flex flex-col mt-4 gap-1 pl-2">
                                    <h4 className="text-md font-medium">{item.name}</h4>
                                    <h4 className="text-md font-medium text-[#929191]"> 
                                        {item.catagory}
                                    </h4>
                                    <h3 className="font-medium">MRP : ₹{item.price}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hcollection
