import React from 'react'
import { assets } from '../assets/assets'

function Policy() {
    return (
        <div className='flex justify-center items-center gap-12 mb-20 max-[580px]:flex-col'>
            <div className='flex flex-col justify-center items-center'>
                <img src={assets.exchange_icon} alt="" className='w-12 mb-3'/>
                <p className='text-center'>Easy Exchange Policy</p>
                <p className='text-[#414141] text-center'>We offer hassle free exchange policy</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={assets.quality_icon} alt="" className='w-12 mb-3'/>
                <p className='text-center'>7 Days Return Policy</p>
                <p className='text-[#414141] text-center'>We provide 7 days free return policy</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={assets.support_img} alt="" className='w-12 mb-3'/>
                <p className='text-center'>Best customer support</p>
                <p className='text-[#414141] text-center'>we provide 24/7 customer support</p>
            </div>
        </div>
    )
}

export default Policy
