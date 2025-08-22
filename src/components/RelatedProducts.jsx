import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import ShopContext from '../context/shopcontext/ShopCreateContext'
import ProductCard from './ProductCard';

function RElatedProducts({id}) {
    const {products} = useContext(ShopContext);
    const [relProducts,setrelProducts] = useState([]);
    useEffect(()=>{
        let pro = products.filter((e)=>e._id===id)[0];
        setrelProducts(products.filter((e)=>e.category===pro.category &&e.subCategory===pro.subCategory).slice(0,5))
        console.log(pro)
        console.log(relProducts)
    },[])
    return (
        <div>
            <Title text1={'RELATED'} text2={'PRODUCTS'} className={'text-3xl mb-5'}/>
            <div className=' grid grid-cols-5 gap-4 justify-items-center items-start max-[1200px]:grid-cols-3 max-[905px]:grid-cols-2 max-[645px]:grid-cols-1'>
                {relProducts.map((product)=>{
                    return <div onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <ProductCard key={product._id} id={product._id} image={product.image[0]} name={product.name} price={product.price}/>
                        </div>
                })}
            </div>  
        </div>
    )
}

export default RElatedProducts
