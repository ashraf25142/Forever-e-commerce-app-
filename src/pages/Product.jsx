import React, { useContext, useState } from 'react'
import ShopContext from '../context/shopcontext/ShopCreateContext'
import { useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';
import Discription from '../components/Discription';
import RElatedProducts from '../components/RelatedProducts';

const Product = () => {
  const location = useLocation();
  const {products,currency,setcart} = useContext(ShopContext);
  const pro = products.filter((item)=>item._id===location.state.id)[0]
  const [image,setimage] = useState(0);
  const [size,setsize] = useState('s'); 
  const cartHandle = () => {
  setcart((prevCart) => {
    const existingIndex = prevCart.findIndex(
      (item) => item.id === pro._id && item.size === size
    );

    if (existingIndex !== -1) {
      // Item exists, update count
      const updatedCart = [...prevCart];
      updatedCart[existingIndex].count += 1;
      return updatedCart; 
    } else {
      // Item does not exist, add new
      return [...prevCart, { size: size, id: pro._id, count: 1 }];
    }
  });
};

  return (
    <div>
      <div className='flex gap-3 flex-[6] mb-5 max-[780px]:flex-col'>
        <div className='flex gap-4 flex-[3] max-[970px]:flex-col-reverse max-[920px]:flex-row'>
          <div className='flex flex-col w-24 max-[970px]:flex-row max-[970px]:w-16 max-[970px]:gap-1 max-[920px]:w-24 max-[920px]:flex-col'>
            <img src={pro.image[0]} alt="" className='mb-2 cursor-pointer rounded-md' onClick={()=>setimage(0)}/>
            <img src={pro.image[1]} alt="" className='mb-2 cursor-pointer rounded-md' onClick={()=>setimage(1)}/>
            <img src={pro.image[2]} alt="" className='mb-2 cursor-pointer rounded-md' onClick={()=>setimage(2)}/>
            <img src={pro.image[3]} alt="" className='mb-2 cursor-pointer rounded-md' onClick={()=>setimage(3)}/>
          </div>
          <div>
            <img className='rounded-md max-[970px]:w-full' src={pro.image[image]} alt="" />
          </div>
        </div>
        <div className='py-3 text-2xl font-semibold flex-col gap-4 flex-[3]'>
          <h1>{pro.name}</h1>
          <div className='flex gap-2 items-center '>
            <div className='flex w-3 h-3'>
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_dull_icon} alt="" />
            </div>
            <div className='ml-14'>(122)</div>
          </div>
          <div className='my-5'>
            <p>{currency}{pro.price}</p>
          </div>
          <div className='my-5 text-sm font-normal pr-28 text-gray-700'>
            <p>{pro.description}</p>
          </div>
          <div className='mb-5'>
            <p className='text-lg mb-2'>Select Size</p>
            <div className='flex gap-3'>
              <div className={`bg-[#F3F4F6] text-[18px] font-normal px-3 py-1 cursor-pointer ${size=='s'?'border border-yellow-400':''}`} onClick={()=>setsize('s')}>S</div>
              <div className={`bg-[#F3F4F6] text-[18px] font-normal px-3 py-1 cursor-pointer ${size=='m'?'border border-yellow-400':''}`} onClick={()=>setsize('m')}>M</div>
              <div className={`bg-[#F3F4F6] text-[18px] font-normal px-3 py-1 cursor-pointer ${size=='l'?'border border-yellow-400':''}`} onClick={()=>setsize('l')}>L</div>
              <div className={`bg-[#F3F4F6] text-[18px] font-normal px-3 py-1 cursor-pointer ${size=='xl'?'border border-yellow-400':''}`} onClick={()=>setsize('xl')}>XL</div>
              <div className={`bg-[#F3F4F6] text-[18px] font-normal px-3 py-1 cursor-pointer ${size=='xll'?'border border-yellow-400':''}`} onClick={()=>setsize('xll')}>XXL</div>
            </div>
          </div>
          <div className='w-fit bg-black text-white rounded-lg px-8 py-2 mb-5 text-[15px]'>
            <button onClick={cartHandle}>ADD TO CART</button>
          </div>
          <hr/>
          <p className=' text-sm font-normal pr-28 text-gray-700'>100% Original product.
              Cash on delivery is available on this product.
              Easy return and exchange policy within 7 days.
          </p>
        </div>
      </div>
      <Discription/>
      <div className='mb-14'>
        <RElatedProducts id={pro._id}/>
      </div>
    </div>
  )
}

export default Product
