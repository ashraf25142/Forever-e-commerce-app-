import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import ShopContext from '../context/shopcontext/ShopCreateContext'
import { assets } from '../assets/assets';

function CartProducts() {
    const {products,currency,cart,setcart} = useContext(ShopContext); 
    const [cartproducts,setcartproducts] = useState([])
    useEffect(()=>{
        setcartproducts(cart.map((item)=>{
            const product = products.find((p)=>p._id===item.id)
            return product? {id:item.id,image:product.image[0],name:product.name,price:product.price,size:item.size,count:item.count}:null
        }).filter(Boolean))
    },[cart, products])
    const delProFromCart = (id,size) =>{
        setcart((prevcart)=>{
            return prevcart.filter(p => !(p.id === id && p.size === size));
        })
    }
    const HandleCount = (e,pro) => {
        setcart((prevcart)=>{
            return prevcart.map((item)=>{
                return (item.id===pro.id&&item.size===pro.size)?{...item,count:parseInt(e.target.value)}:item
            })
        })
    }
    return (
        <div>
            <Title text1={'YOUR'} text2={'CART'} className={'!justify-start mb-5 text-3xl'}/>
            {
                cartproducts.map((pro)=>{
                    return( 
                        <div key={`${pro.id}-${pro.size}`}>
                            <hr/>
                            <div className='flex py-6 items-center justify-between max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-5 '>
                                <div className='flex gap-5'>
                                    <img src={pro.image} alt='' className='w-20'/>
                                    <div>
                                        <p>{pro.name}</p>
                                        <div className='flex gap-5 items-center mt-3'>
                                            <p>{currency}{pro.price}</p>
                                            <div className='bg-[#F3F4F6] text-[18px] font-normal px-3 py-1 border'>{pro.size}</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <input type='number' className='border w-16 text-xl pl-3' min={1} value={pro.count} onChange={(e)=>HandleCount(e,pro)}/>
                                </div>
                                <div>
                                    <img src={assets.bin_icon} alt='' className='w-7 mr-5 cursor-pointer' onClick={()=>delProFromCart(pro.id,pro.size)}/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartProducts
