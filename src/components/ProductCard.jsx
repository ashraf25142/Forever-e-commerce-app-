import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({image,name,price,className,id}) {
    return (
        <Link to='/product' state={{id:id}} className='cursor-pointer'>
            <div className={`flex flex-col w-56 rounded-md ${className}`} >
            <div className='overflow-hidden rounded-md'>
                <img src={image} alt='' className='hover:scale-110 transition ease-in-out' />
            </div>
            <p className='text-[15px]'>{name}</p>
            <p className='text-[15px]'>${price}</p>
        </div>
        </Link>
    )
}

export default ProductCard
