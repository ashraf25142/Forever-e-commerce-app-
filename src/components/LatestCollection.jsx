
import { useContext, useEffect, useState } from 'react'
import Title from './Title'
import  ShopContext  from '../context/shopcontext/ShopCreateContext'
import ProductCard from './ProductCard';

function LatestCollection() {
    const {products} = useContext(ShopContext);
    const [Latestproducts,setLatestproducts] = useState([]);
    useEffect(()=>{
        setLatestproducts(products.slice(0,10));
    },[])
    return (
        <div>
            <div className='text-3xl '>
                <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
                <p className='text-[16px] max-[540px]:text-[15px] text-center text-[#414141] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            </div>
            <div className=' grid grid-cols-5 gap-4 justify-items-center items-start max-[1200px]:grid-cols-3 max-[905px]:grid-cols-2 max-[645px]:grid-cols-1'>
                {Latestproducts.map((product)=>{
                    return <ProductCard key={product._id} id={product._id} image={product.image[0]} name={product.name} price={product.price}/>
                })}
            </div>      
        </div>
    )
}

export default LatestCollection
