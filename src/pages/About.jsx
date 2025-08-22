import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Subscribe from '../components/Subscribe'

const About = () => {
  return (
    <div className='flex flex-col'>
      <Title text1={'ABOUT'} text2={'US'} className={'!mt-10 text-3xl max-[450px]:text-2xl '}/>
      <div className='flex mt-12 gap-5 max-[850px]:flex-col'>
        <img src={assets.about_img} alt='' className='flex-1 rounded-md w-96 max-[980px]:w-64 max-[900px]:w-48 max-[850px]:w-2/3 max-[850px]:self-center '/>
        <div className='flex-1 flex flex-col items-center justify-center px-10 text-gray-500'>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <br/>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <br/>
          <h1 className='self-start text-black' >Our Mission</h1>
          <br/>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>
      <Title text1={'WHY'} text2={'CHOOSE US'} className={'!mt-10 text-3xl max-[450px]:text-2xl !self-start mb-12'}/>
      <div className='flex flex-row mb-16 max-[900px]:flex-col'>
        <div className='p-14 flex flex-col gap-2 border max-[400px]:p-7'>
          <h1>Quality Assurance:</h1>
          <p className='text-gray-500'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='p-14 flex flex-col gap-2 border max-[400px]:p-7'>
          <h1>Convenience:</h1>
          <p className='text-gray-500'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='p-14 flex flex-col gap-2 border max-[400px]:p-7'>
          <h1>Exceptional Customer Service:</h1>
          <p className='text-gray-500'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <Subscribe/>
    </div>
  )
}

export default About
