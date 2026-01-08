import React, { useState } from 'react'

const Hcategory = () => {
    
    const items = [
        {
            id: 0,
            img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_716,c_limit/1f6dcd2f-749b-412d-938b-abac8e505a10/nike-just-do-it.png",
            
            catagory: "Running",
          
        },
        {
            id: 1,
            img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_716,c_limit/d6b91c33-af3b-4b08-811b-07f65e94c12c/nike-just-do-it.png",
          
            catagory: "Football",
          
        },
        {
            id: 2,
            img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_716,c_limit/a6e005d8-11ca-4684-895e-2a6c9116ea43/nike-just-do-it.png",
           
            catagory: "basketball",
      
        },
        {
            id: 3,
            img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_716,c_limit/edf91243-2922-4f9e-95e4-df7f45d38f0b/nike-just-do-it.png",
           
            catagory: "Gym & Training",
         
        },
        {
            id: 4,
            img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_716,c_limit/97703c04-744f-415d-934a-0ea52d4cbb25/nike-just-do-it.png",
          
            catagory: "Yoga",
          
        },
        {
            id: 5,
            img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_716,c_limit/bdefd13f-b003-4c75-b7b3-c945faac3c30/nike-just-do-it.png",
          
            catagory: "golf",
           
        },
        {
            id: 6,
            img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_716,c_limit/6e7852d1-446e-462e-bc0a-453c36f860a0/nike-just-do-it.png",
          
            catagory: "Tennis",
           
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
            <div className='py-8 px-14'>
                <div className=' flex justify-between'>
                    <h2 className='text-2xl pl-2 font-medium'>Shop by Sport</h2>
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
                            <div key={item.id} className="w-120 flex-shrink-0 ">
                                <img
                                    src={item.img}
                                    alt=""
                                    className="w-full  object-cover h-150 "
                                />
                                <div className="flex flex-col mt-4 gap-1 pl-2">
                                   
                                    <h4 className="text-xl font-medium ">
                                        {item.catagory}
                                    </h4>
                                   
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hcategory
