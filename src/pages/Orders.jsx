import React, { useContext } from 'react'
import Title from '../components/Title'
import ShopContext from '../context/shopcontext/ShopCreateContext'

const Orders = () => {
  const {orders,currency} = useContext(ShopContext) 
  return (
    <div>
      <Title text1={'MY'} text2={'ORDERS'} className={'!justify-start mb-10 text-3xl !mt-8 max-[550px]:text-xl'}/>
      <hr/>
      {
        orders.map((order)=>{
          return <div key={order.id} className='flex flex-row justify-between items-center my-5'>
            <div className='flex gap-3'>
              <img src={order.image} alt='' className='w-24'/>
              <div>
                <p>{order.name}</p>
                <div className='flex gap-2'>
                  <p>{currency}{order.price}</p>
                  <p>Quantity: {order.count}</p>
                  <p>Size: {order.size}</p>
                </div>
                <p>Date: {order.Date}</p>
                <p>Payment: {order.paymentMethod}</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='bg-green-500 w-3 rounded-full h-3'></div>
              <p>{order.orderTrack}</p>
            </div>
            <button className='border px-3 h-9 '>Track Order</button>
          </div>
        })
      }
      <hr/>
    </div>
  )
}

export default Orders
