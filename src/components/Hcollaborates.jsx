import React from 'react'

const Hcollaborates = () => {

    const items=[
        {src:"https://static.nike.com/a/images/w_144,c_limit/9de56110-9532-4b30-baa2-c4d4655621df/image.png",
        name:"Air Jordan1 Low"

    },
        {src:"https://static.nike.com/a/images/w_144,c_limit/b32a2f7c-0faf-495f-9b1a-7a791d511297/image.png",
        name:"Dunk"

    },
        {src:"https://static.nike.com/a/images/w_144,c_limit/69f10b28-b90e-4d01-86c2-cbe744e93e9f/image.png",
        name:"Air force"

    },
        {src:"https://static.nike.com/a/images/w_144,c_limit/570e1d92-9a25-4437-8fc5-a63065e8bbb5/image.png",
        name:"Vomero Plus"

    },
        {src:"https://static.nike.com/a/images/w_144,c_limit/5a6f0784-1e78-4c6a-9a57-45fd4bcb90b6/image.png",
        name:"Pegasus Premuim"

    },
        {src:"https://static.nike.com/a/images/w_144,c_limit/2e967c46-235c-4705-8247-2187fa4a1a2e/image.png",
        name:"24.7 Collection"

    },
        {src:"https://static.nike.com/a/images/w_144,c_limit/2e967c46-235c-4705-8247-2187fa4a1a2e/image.png",
        name:"Tennis Approval"

    },
        {src:"https://static.nike.com/a/images/w_144,c_limit/48ba5398-a354-48ad-b19e-9e7056bfabff/image.png",
        name:"vaporfly"

    },
        {src:"https://static.nike.com/a/images/w_144,c_limit/48ba5398-a354-48ad-b19e-9e7056bfabff/image.png",
        name:"Sabrina"

    },
        {src:"https://static.nike.com/a/images/w_144,c_limit/d5fd04cc-9c96-495d-ae67-d267d8fec001/image.png",
        name:"Shox"

    },
        {src:"https://static.nike.com/a/images/w_144,c_limit/57d95623-ba52-41f6-a84b-1aa5b5c9cc02/image.png",
        name:"Metcon10"

    },
        {src:"https://static.nike.com/a/images/w_144,c_limit/57d95623-ba52-41f6-a84b-1aa5b5c9cc02/image.png ",
        name:"NBA Jerseys"

    },
]
  return (
    <div className='flex flex-col justify-center items-center mt-35 mb-25 gap-45 border-b-1 mx-20'>
   <div>
    <h2 className='text-6xl font-bold tracking-tighter font-[family:helvet] text-center'>SPOTLIGHT</h2>
    <p className='mt-5 text-md font-medium font-[family:helvet]'>Classic silhouettes and cutting-edge innovation to build your game from the ground up.</p>
   </div>
   <div className='w-250   h-90 flex flex-wrap mb-20 '>
    {items.map((elem,idx)=>{
        return     <div className='    h-40 w-40 flex flex-col justify-center items-center sh'  >
        <img src={elem.src} alt="" className='w-1/2 object-center object-cover' />
        <h4 className='text-[10px] font-bold'>{elem.name}</h4>

    </div>

    })}

   </div>
    </div>
  )
}

export default Hcollaborates
