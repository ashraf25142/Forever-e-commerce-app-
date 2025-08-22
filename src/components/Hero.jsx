import React from 'react'
import {assets} from '../assets/assets'


function Hero() {
    return (
            <div className='flex border border-gray-400 max-[780px]:flex-col'>
                <div className='w-1/2 text-[#414141] max-[780px]:w-full'>
                    <div className='flex flex-col justify-center items-center w-full h-full max-[780px]:w-full'>
                        <div className='flex items-center mb-3'>
                            <hr className='w-8 h-[2px] mr-2 bg-[#414141]'/>
                            <p className='font-semibold '>OUR BESTSELLERS</p>
                        </div>
                        <h1 className='prata-regular text-5xl whitespace-nowrap max-[960px]:text-4xl'>Latest Arrivals</h1>
                        <div className='flex items-center mt-3'>
                            <p className='font-semibold '>SHOP NOW</p>
                            <hr className='w-8 h-[2px] ml-2 bg-[#414141]'/>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 max-[780px]:w-full'>
                    <img src={assets.hero_img} alt=''/>
                </div>
            </div>
    )
}

export default Hero
