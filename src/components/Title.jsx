import React from 'react'

function Title({text1,text2 ,className}) {
    return (
        <div className={`flex justify-center items-center gap-2 mt-16 ${className}`}>
            <p className='text-gray-500'>{text1} <span className='text-gray-700'>{text2}</span></p>
            <p className='h-[2px] w-12 max-[780px]:w-8 bg-[#414141] max-[770px]:w-6'></p>
        </div>
    )
}

export default Title
