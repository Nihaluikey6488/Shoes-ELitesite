import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
const Womencategories = () => {
  const navigate = useNavigate();
  
    let cards = [
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1764846607_8453308.jpg?w=480&dpr=2",
            name: "urban blaze: mocha",
            qual: "women high top sneakers",
            price: 2599,
            quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1703921049_3355229.jpg?w=480&dpr=2",
            name: "urban blaze: lavender",
            qual: "turf football shoes",
            price: 2699,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1736836123_2404128.jpg?w=480&dpr=2",
            name: "hello kitti: kawali",
            qual: "men low top sneakers",
            price: 2499,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1742818650_8041034.jpg?w=480&dpr=2",
            name: "urban blaze: latte",
            qual: "women low top sneakers",
            price: 2599,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1767186695_6243365.jpg?w=480&dpr=2",
            name: "UBZ ascend:oasis",
            qual: "women low top sneakers",
            price: 2199,
             quantity:1,
              quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1760984710_8316107.jpg?w=480&dpr=2",
            name: "galleto:rose",
            qual: "women low top sneakers",
            price: 2699,
             quantity:1,
              quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1761923864_7506881.jpg?w=480&dpr=2",
            name: "galleto:cassta",
            qual: "women low top sneakers",
            price: 2599,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1754715513_2181994.jpg?w=480&dpr=2",
            name: "urban blaze:butter",
            qual: "women low top sneakers",
            price: 2299,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1767182521_9069872.jpg?w=480&dpr=2",
            name: "usx ascend: flamingo",
            qual: "women low top sneakers",
            price: 2999,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1767607919_3939579.jpg?w=480&dpr=2",
            name: "ubz ascend: mocha",
            qual: "women low top sneakers",
            price: 2499,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1760105027_7576840.jpg?w=480&dpr=2",
            name: "milano: cloud",
            qual: "women low top sneakers",
            price: 2579


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1755410142_4792746.jpg?w=480&dpr=2",
            name: "spongebob:under the sea",
            qual: "men low top sneakers",
            price: 2999,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1762508536_9396810.jpg?w=480&dpr=2",
            name: "fumes nx:storm",
            qual: "women low top sneakers",
            price: 2099,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713783762_6094468.jpg?w=480&dpr=2",
            name: "urban blaze:pink forest",
            qual: "women low top sneakers",
            price: 2599,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1760984576_3110823.jpg?w=480&dpr=2",
            name: "raptors 242",
            qual: "women low top sneakers",
            price: 2199,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1761736004_2174224.jpg?w=480&dpr=2 ",
            name: "kanso v2: belge",
            qual: "women low top sneakers",
            price: 2299,
             quantity:1


        },

    ]

    const [cart, setCart] = useState(null);

    function getdata(idx) {
        setCart(cards[idx])
    }
    //    console.log(cart)
    return (

        <div className='mt-20 mx-10 '>
            <div className='flex justify-between items-center capitalize'>
                <div>
                    <h4 className='text-[#777777d7]'>home/the souled store/tss original women sneakers</h4>


                    <h2 className='text-xl py-2'>tss originals Womens sneakers- 45 items</h2>
                </div>
                {/* <div className='border-1 py-2 px-4 flex gap-2 items-center rounded-sm'>
                    <h2>selecting sorting options</h2>
                    <h2><i className="ri-arrow-down-s-line text-2xl"></i></h2>

                </div> */}
            </div>
            <div className='flex gap-2 mt-10 px-10 flex-wrap'>
                {cards.map((elem, idx) => {
                    return <div key={idx} className=' w-80 h-120 capitalize p-2 overflow-hidden shrink-0' onClick={() => {
                        navigate("/men/category/men-anchor", {
                            state: cards[idx]
                        });
                    }}
                    >
                        <img src={elem.src} alt="" className='w-full h-[80%] object-center object-cover rounded-3xl ' />
                        <div className='mt-2 ml-2 pr-6  '>
                            <h4 className='font-medium border-b-1 capitalize'>{elem.name}</h4>
                            <h5 className='text-[#777777]'>{elem.qual}</h5>
                            <h5 className='font-medium'>₹ {elem.price}</h5>

                        </div>

                    </div>

                })}
             

            </div>

        </div>
    )
}

export default Womencategories
