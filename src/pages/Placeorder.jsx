import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import ShopContext from '../context/shopcontext/ShopCreateContext'
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/Firebase';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Placeorder = () => {
  const {products,currency,delivery_fee,Totalmoney,setorders,cart,setcart,userid} = useContext(ShopContext);
  const [paymentMethod,setpaymentMethod] = useState('cashOnDelivery')
  const navigate = useNavigate();
  const handleplaceorders = async(e=null) => {
    if (e)e.preventDefault()
    await getOrdersProducts();
    setcart([]);
    navigate('/orders', { replace: true });
  }
  const getOrdersProducts = async() => {
    const copyorders =cart.map((item)=>{
            const product = products.find((p)=>p._id===item.id)
            return product? {id:item.id,image:product.image[0],name:product.name,price:product.price,size:item.size,count:item.count,orderTrack:'Ordered Placed',paymentMethod:paymentMethod,Date:new Date().toDateString()}:null
        }).filter(Boolean)
        setorders(copyorders)
        await addOrdersToFireStore(copyorders)
  }
  const addOrdersToFireStore = async (orders) => {
    try {
      await setDoc(doc(db,'users',userid),{
        orders:orders
      },{merge:true})
    }catch(e){
      console.log(e);
    }
  }
  // payment paypal
  const initialOptions = {
        clientId: "ASq8uWAW7MBL_QvGEWMLvLXL2WGaLseCPucjGiKFLqWBqzjQyroF2EnR6iysc9_XChsS98I8c6HJ2aQT",
    };
    const styles = {
        shape: "rect",
        layout: "horizontal",
        
    };

  return (
    <div className='flex flex-col mb-20'>
      <Title text1={'DELIVERY '} text2={'INFORMATION'} className={'!justify-start mb-10 text-3xl !mt-8 max-[550px]:text-xl'}/>
      <div>
        <form onSubmit={(e)=>handleplaceorders(e)} className='flex flex-row gap-5 max-[1150px]:flex-col'>
          <div className='flex-1 flex flex-col gap-3'>
            <div className='flex flex-row gap-2 max-[550px]:flex-col'>
              <input type="text" placeholder='First name' className='flex-1 outline-none border py-2 px-3 rounded-md' required/>
              <input type="text" placeholder='Last name' className='flex-1 outline-none border py-2 px-3 rounded-md' required/>
            </div>
            <input type="email" placeholder='Email address' className='w-full outline-none border py-2 px-3 rounded-md' required/>
            <input type="text" placeholder='Street' className='w-full outline-none border py-2 px-3 rounded-md' required/>
            <div className='flex gap-2 max-[550px]:flex-col'>
              <input type="text" placeholder='City' className='flex-1 outline-none border py-2 px-3 rounded-md' required/>
              <input type="text" placeholder='State' className='flex-1 outline-none border py-2 px-3 rounded-md' required/>
            </div>
            <div className='flex gap-2 max-[550px]:flex-col'>
              <input type="number" placeholder='Zipcode' className='flex-1 outline-none border py-2 px-3 rounded-md' required/>
              <input type="text" placeholder='Country' className='flex-1 outline-none border py-2 px-3 rounded-md' required/>
            </div>
            <input type="Phone" placeholder='Phone' className='w-full outline-none border py-2 px-3 rounded-md' required/>
          </div>
          <div className='flex-1'>
            <div className=' flex flex-col mb-8 gap-5'>
                <Title text1={'CART'} text2={'TOTALS'} className={'self-start text-2xl !mt-0 max-[550px]:text-xl'}/>
                <div className='flex flex-col gap-3 w-full'>
                    <div className='flex justify-between'>
                        <p>Subtotal</p>
                        <p>{currency} {(Totalmoney-delivery_fee)<0?0:Totalmoney-delivery_fee}</p>
                    </div>
                    <hr/>
                    <div className='flex justify-between'>
                        <p>Shipping Fee</p>
                        <p>{currency} {delivery_fee}</p>
                    </div>
                    <hr/>
                    <div className='flex justify-between'>
                        <p>Total</p>
                        <p>{currency} {Totalmoney}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
              <Title text1={'PAYMENT'} text2={'METHOD'} className={'!justify-start mb-5 text-2xl !mt-0 max-[550px]:text-xl'}/>
              <div className='flex flex-col gap-5 max-[550px]:flex-col'>
                <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons style={styles} createOrder={(data,actions)=>{
                      return actions.order.create({
                        purchase_units:[
                          {
                            amount:{
                              value: Totalmoney.toFixed(2),
                              currency_code:'USD'
                            }
                          }
                        ]
                      })
                    }}
                    onApprove={(data,actions)=>{
                      return actions.order.capture().then(async function(){
                        setpaymentMethod('paypal');
                        await handleplaceorders();
                      })
                    }}/>
                </PayPalScriptProvider>
              </div>
              <button type='submit' onClick={()=>setpaymentMethod('cashOnDelivery')} className='bg-black mt-5 self-end rounded-md text-white py-2 px-4 w-5/12 text-center max-[650px]:w-full'>
                CASH ON DELIVERY
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Placeorder
