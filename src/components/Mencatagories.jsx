
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Mencatagories = () => {
    const navigate = useNavigate();
    let cards = [
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1764328432_3845027.jpg?w=300&dpr=2",
            name: "souled : viper",
            qual: "men high top sneakers",
            price: 2599,
            quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1764845446_6930844.jpg?w=300&dpr=2",
            name: "Tactix: Black Panther Edition",
            qual: "turf football shoes",
            price: 2699,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1764844932_3486647.jpg?w=300&dpr=2",
            name: "Kanso V2: Beige",
            qual: "men low top sneakers",
            price: 2499,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1764845623_1281426.jpg?w=300&dpr=2",
            name: "UBZ Legacy: Blueprint",
            qual: "men low top sneakers",
            price: 2599,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1764845623_1281426.jpg?w=300&dpr=2",
            name: "raptors v2:ashfag",
            qual: "men low top sneakers",
            price: 2199,
             quantity:1,
              quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1749824296_8700601.jpg?w=300&dpr=2",
            name: "urban blaz: mafia",
            qual: "men low top sneakers",
            price: 2699,
             quantity:1,
              quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1754384237_4361257.jpg?w=480&dpr=2",
            name: "urban blaze: tokyo",
            qual: "men low top sneakers",
            price: 2599,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1754549748_1937977.jpg?w=300&dpr=2",
            name: "urban blaze: butter",
            qual: "men low top sneakers",
            price: 2299,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1732894293_6417459.jpg?w=300&dpr=2",
            name: "urban blaze: court blue",
            qual: "men low top sneakers",
            price: 2999,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1754720266_9491542.jpg?w=300&dpr=2",
            name: "urban blaze: latte",
            qual: "men low top sneakers",
            price: 2499,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1764328432_3625693.jpg?w=300&dpr=2",
            name: "velocity: scarlet",
            qual: "men low top sneakers",
            price: 2579,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1764845623_7129525.jpg?w=300&dpr=2",
            name: "urban blaze:inferno",
            qual: "men low top sneakers",
            price: 2999,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1742902361_5242462.jpg?w=300&dpr=2",
            name: "fumes nx:storm",
            qual: "men low top sneakers",
            price: 2099,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1764845446_1255416.jpg?w=300&dpr=2",
            name: "urban blaze:reverse mafia",
            qual: "men low top sneakers",
            price: 2599,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1758604944_7926528.jpg?w=480&dpr=2",
            name: "raptors 242",
            qual: "men low top sneakers",
            price: 2199,
             quantity:1


        },
        {
            src: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1749824480_4403690.jpg?w=300&dpr=2",
            name: "fumes nx:shadow",
            qual: "men low top sneakers",
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
                    <h4 className='text-[#777777d7]'>home/the souled store/tss original men sneakers</h4>


                    <h2 className='text-xl py-2'>tss originals mens sneakers- 45 items</h2>
                </div>
                <div className='border-1 py-2 px-4 flex gap-2 items-center rounded-sm'>
                    <h2>selecting sorting options</h2>
                    <h2><i className="ri-arrow-down-s-line text-2xl"></i></h2>

                </div>
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
                            <h4 className='font-medium border-b-1'>{elem.name}</h4>
                            <h5 className='text-[#777777]'>{elem.qual}</h5>
                            <h5 className='font-medium'>₹ {elem.price}</h5>

                        </div>

                    </div>

                })}
             

            </div>

        </div>
    )
}

export default Mencatagories
