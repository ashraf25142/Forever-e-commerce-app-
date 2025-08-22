import React from 'react'
import { assets } from '../assets/assets'
import Subscribe from '../components/Subscribe'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div className='flex flex-col'>
          <Title text1={'CONTACT'} text2={'US'} className={'!mt-10 text-3xl max-[450px]:text-2xl '}/>
          <div className='flex mt-12 justify-center items-center mb-16 gap-5 max-[850px]:flex-col'>
            <img src={assets.contact_img} alt='' className='flex-1 rounded-md w-96 max-[980px]:w-64 max-[900px]:w-48 max-[850px]:w-2/3 max-[850px]:self-center '/>
            <div className='flex-1 flex flex-col items-start justify-center px-10 text-gray-500'>
              <h1 className='text-2xl text-gray-700 font-semibold'>Our Store</h1>
              <br/>
              <p>54709 Willms Station</p>
              <p>Suite 350, Washington, USA</p>
              <br/>
              <p>Tel: (415) 555-0132</p>
              <p>Email: admin@forever.com</p>
              <br/>
              <h1 className='text-2xl text-gray-700 font-semibold'>Careers at Forever</h1>
              <br/>
              <p>Learn more about our teams and job openings.</p>
              <br/>
              <button className='border border-black px-5 py-3 text-black hover:text-white hover:bg-black transition duration-300'>Explore jobs</button>
            </div>
          </div>
          <Subscribe/>
        </div>
  )
}

export default Contact
