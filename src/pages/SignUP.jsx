import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/Firebase';
import { createUserWithEmailAndPassword ,signOut} from 'firebase/auth';

function SignUP() {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [showWrongSigningIn,setshowWrongSigningIn] = useState(false)
    const navigate = useNavigate();
    const handleSignUp = async (e) => {
        e.preventDefault();
        setshowWrongSigningIn(false)
        try{
            await createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
                const user = userCredential.user
                if(user){
                    signOut(auth)
                    navigate('/login');
                }
            })
        }catch(e){
            setshowWrongSigningIn(true)
            console.log(e);
        }
    }
    return (
        <div className='flex justify-center items-center mb-32'>
            <div className='flex flex-col gap-5 w-96 justify-center items-center my-20'>
                <div className={`flex justify-center items-center gap-2`}>
                    <p className='text-[#1f2937] text-3xl'>Sign Up</p>
                    <p className='h-[2px] w-8 max-[780px]:w-6 bg-[#414141] max-[770px]:w-6'></p>
                </div>
                {
                    showWrongSigningIn?<div className='bg-red-500 text-white text-[18px] px-5 py-3 rounded-md'>
                        wrong process , try again 
                    </div>:''
                }
                <form onSubmit={(e)=>handleSignUp(e)} className='flex flex-col gap-3'>
                    <input type='email' onChange={(e)=>setemail(e.target.value)} placeholder='Email' required className={`py-2 px-5 pr-24 border border-black ${showWrongSigningIn?'border-red-700':''}`}/>
                    <input type='password' onChange={(e)=>setpassword(e.target.value)} placeholder='Password' required className={`py-2 px-5 pr-24 border border-black ${showWrongSigningIn?'border-red-700':''}`}/>
                    <div className='flex justify-between text-sm text-gray-800 mt-[-5px]'>
                        <p className='cursor-pointer'>Forgot your password?</p>
                        <p className='cursor-pointer' onClick={()=>navigate('/login')}>have already account?</p>
                    </div>
                    <button type='submit' className='px-5 py-3 bg-black text-white w-1/3 self-center rounded-md mt-5'>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUP
