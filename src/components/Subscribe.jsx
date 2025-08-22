import React from 'react'

function Subscribe() {
    const OnSubmitHandler = (e)=>{
        e.preventDefault();
    }
    return (
        <div className='text-center mb-20 '>
            <p className='text-2xl'>Subscribe now & get 20% off</p>
            <p className='text-[#414141] text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form className='w-full mx-auto mt-6' onSubmit={OnSubmitHandler}>
                <input placeholder='Enter Your Email' className='p-3 text-[14px] outline-none w-1/3 bg-white border max-[580px]:w-56 max-[400px]:mb-4' required/>
                <button type='submit' className='text-[14px] text-white bg-black py-3 px-10 max-[580px]:px-2 max-[400px]:rounded-md'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default Subscribe
