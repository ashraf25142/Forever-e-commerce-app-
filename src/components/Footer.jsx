import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <div>
            <div className='flex mb-8 max-[770px]:flex-col max-[770px]:gap-4'>
                <div className='flex-[2] max-[900px]:'>
                    <img src={assets.logo} alt='' className='w-36 mb-5'/>
                    <p className='text-[14px] text-[#414141] w-2/3 max-[900px]:w-5/6'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </p>
                </div>
                <div className='flex-[1]'>
                    <h1 className='mb-5 text-2xl max-[900px]:text-xl max-[770px]:mb-1'>COMPANY</h1>
                    <ul className='text-[14px] text-[#414141]'>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Delivery</p>
                        <p>Privacy policy</p>
                    </ul>
                </div>
                <div className='flex-[1]'>
                    <h1 className='mb-5 text-2xl max-[900px]:text-xl max-[770px]:mb-1'>GET IN TOUCH</h1>
                    <ul className='text-[14px] text-[#414141]'>
                        <p>+1-000-000-0000</p>
                        <p>ashraf.mohamed.lm.12@gmail.com</p>
                        <p>Instagram</p>
                    </ul>
                </div>
            </div>
            <hr className='h-[2px]'/>
            <div className='text-center my-4'>Copyright 2025@ Ashraf.dev - All Right Reserved.</div>
        </div>
    )
}

export default Footer
