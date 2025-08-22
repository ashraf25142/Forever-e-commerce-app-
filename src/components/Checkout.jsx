import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { Link, useNavigate } from 'react-router-dom'
import ShopContext from '../context/shopcontext/ShopCreateContext'

function Checkout() {

    const {products,currency,delivery_fee,cart,setTotalmoney,loggedIn} = useContext(ShopContext);
    const [subTotal,setsubTotal] = useState(0);
    const [Total,setTotal] = useState(0);
    const navigate = useNavigate();
    useEffect(()=>{
        const newProArr = cart.map((item)=>{
            const product = products.find((p)=>p._id===item.id)
            return product? {id:item.id,image:product.image[0],name:product.name,price:product.price,size:item.size,count:item.count}:null
        }).filter(Boolean)
        const ST = newProArr.reduce((acc,cur)=>{
            return acc+=(cur.price*cur.count);
        },0)
        setsubTotal(ST)
        setTotal(((ST-delivery_fee)<0)?0:ST-delivery_fee)
        setTotalmoney(((ST-delivery_fee)<0)?0:ST-delivery_fee)
    },[cart, delivery_fee, products, setTotalmoney])
    const handlecheckout = () => {
        if(loggedIn){
            navigate('/placeorder')
        }
    }
    return (
        <div className='flex justify-end'>
            <div className=' flex flex-col mb-14 gap-5 w-5/12 max-[1000px]:w-7/12 max-[650px]:w-10/12 max-[450px]:w-12/12'>
                <Title text1={'CART'} text2={'TOTALS'} className={'self-start text-3xl max-[450px]:text-2xl'}/>
                <div className='flex flex-col gap-3 w-full'>
                    <div className='flex justify-between'>
                        <p>Subtotal</p>
                        <p>{currency} {subTotal}</p>
                    </div>
                    <hr/>
                    <div className='flex justify-between'>
                        <p>Shipping Fee</p>
                        <p>$ 10.00</p>
                    </div>
                    <hr/>
                    <div className='flex justify-between'>
                        <p>Total</p>
                        <p>{currency} {Total}</p>
                    </div>
                </div>
                <button onClick={()=>handlecheckout()} className='bg-black rounded-md text-white py-2 px-4 w-6/12 text-center self-end max-[650px]:w-full'>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    ) 
}

    export default Checkout
