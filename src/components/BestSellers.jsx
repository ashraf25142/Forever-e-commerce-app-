import React, { useContext,useEffect, useState } from 'react'
import Title from './Title'
import ProductCard from './ProductCard';
import  ShopContext  from '../context/shopcontext/ShopCreateContext'

function BestSellers() {
    const {products} = useContext(ShopContext);
    const [bestseller , setbestseller] = useState([]);
    useEffect(()=>{
        setbestseller(products.filter((e) => e.bestseller===true).slice(0,5));
    },[])
    return (
        <div className='mb-20'>
            <div className='text-3xl '>
                <Title text1={'BEST'} text2={'SELLERS'}/>
                <p className='text-[16px] max-[540px]:text-[15px] text-center text-[#414141] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            </div>
            <div className='grid grid-cols-5 gap-4 justify-items-center items-start max-[1200px]:grid-cols-3 max-[905px]:grid-cols-2 max-[645px]:grid-cols-1'>
                {
                    bestseller.map((product)=>{
                        return <ProductCard key={product._id} id={product._id} image={product.image[0]} name={product.name} price={product.price}/>
                    })
                }
            </div>
        </div>
    ) 
}

export default BestSellers
