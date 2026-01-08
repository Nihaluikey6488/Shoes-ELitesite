import React, { useState } from 'react'

const Cart = () => {


  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

  const totalAmount = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  
  const deleteBtn = (id) => {
    let newCart = [...cart]
    newCart.splice(id, 1)
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))

  }



  return (

    <div className='mt-25 w-full h-screen flex flex-col  font-[family-name:helvet]'>
      <h2 className='text-center text-6xl '>Your Cart</h2>
      <div className='w-full flex justify-center items-start mt-10 '>

        {/* cart design */}
        <div className='w-1/2'>
          <div className='w-[100%]   '>

            <div className='flex w-2/3 py-2 px-4 uppercase text-xs font-medium border-b-1 text-[#626161]'>
              <div className='w-2/3 uppercase flex items-center'>
                <h4>product</h4>

              </div>
              <div className='w-2/3 flex items-center justify-between'>
                <h4>price</h4>
                <h4>quantity</h4>
                <h4>total</h4>


              </div>


            </div>

          </div>

          {/* cart section items parent */}
          <div className='w-[100%]  mt-5 '>
            {/* child  */}
            {cart.map(function (elem, idx) {
              return <div key={idx}>
                <div className='flex w-2/3 py-1 px-4 uppercase text-sm font-medium  pb-5 text-[#131313]'>
                  <div className='w-1/2 uppercase flex items-center gap-6'>
                    <img src={elem.src} alt="" className='w-[80px] h-[80px] object-center object-cover rounded-xl' />
                    <button className="ri-close-line h-8 w-8 bg-black flex justify-center items-center text-white p-1 font-bold rounded-md active:scale-95 active:bg-[#2a2a2a]"
                      onClick={() => {
                        deleteBtn(idx)
                      }}></button>


                  </div>
                  <div className='w-1/2 flex items-center justify-between'>
                    <h4>₹ {elem.price}</h4>
                    <div className='flex items-center gap-3 text-ml'>
                      <button

                        className=' px-1 text-black text-2xl h-5 flex items-center rounded-sm active:scale-95'
                      >-</button>
                      <h4 className='text-xl text-black'>{elem.quantity}</h4>
                      <button className=' px-1 text-black text-2xl h-5 flex items-center rounded-sm active:scale-95'
                      >+</button>

                    </div>
                    <h4>₹ {elem.price * elem.quantity}</h4>





                  </div>


                </div>
              </div>
            })}



          </div>

        </div>

        <div>
          <div className='w-80 h-80 border-2 py-5 px-4 flex flex-col justify-between capitalize rounded-md'>
            <h3 className='border-b-1 py-4 text-xl'>order summary</h3>

            {/* total section */}




            <div className=' text-xs font-medium text-[#3d3d3d] flex flex-col gap-5 border-b-1 py-4'>
              <div className='flex justify-between items-center'>


                <h4>subtotal</h4>
                <h4>₹ {totalAmount}</h4>
              </div>
              <div className='flex justify-between items-center'>
                <h4>shipping</h4>
                <h4>free</h4>
              </div>
              <h4 className='text-green-700 '>Add coupan code <span><i class="ri-arrow-right-long-line"></i></span></h4>
            </div>

            <div className='flex justify-between items-center text-2xl font-medium'>

              <h3>Total</h3>
              <h3>₹ {totalAmount}</h3>

            </div>

            {/* end */}
          </div>

        </div>



      </div>


    </div>
  )
}

export default Cart
