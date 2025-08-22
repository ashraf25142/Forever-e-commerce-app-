import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ShopContext from '../context/shopcontext/ShopCreateContext';
import {auth, db} from '../../config/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc ,doc,getDoc} from "firebase/firestore"; 

const Login = () => {
    const navigate = useNavigate();
    const {setloggedIn,cart,setuserid,setcart,setCartLoadedFromFirestore} = useContext(ShopContext);
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [showWrongSigningIn,setshowWrongSigningIn] = useState(false)
    const handlelogin = async (e)=>{
        e.preventDefault()
        setshowWrongSigningIn(false)
        try{
            await signInWithEmailAndPassword(auth,email.trim(),password.trim()).then(async(userCredential)=>  {
            const user = userCredential.user
            if(user)
            {
                setloggedIn(true);
                setuserid(user.uid);
                const docSnap = await getDoc(doc(db, "users", user.uid));
                if (docSnap.exists()) {
                    const firestoreCart = docSnap.data().cart || [];
                    setcart(firestoreCart);
                    setCartLoadedFromFirestore(true)
                }else{
                    handlecart(user.uid);
                    setCartLoadedFromFirestore(true)
                }
                navigate('/');
            }
        })
        } catch(err){
                console.log(err)
                setshowWrongSigningIn(true)
        }
    }
    const handlecart = async (id) => {
        try{
            await setDoc(doc(db,'users',id),{
                cart:cart
            },{ merge: true })
        }catch(e){
            console.error(e);
        }
    }
    return (
        <div className='flex justify-center items-center mb-32'>
            <div className='flex flex-col gap-5 w-96 justify-center items-center my-20'>
                <div className={`flex justify-center items-center gap-2`}>
                    <p className='text-[#1f2937] text-3xl'>Login</p>
                    <p className='h-[2px] w-8 max-[780px]:w-6 bg-[#414141] max-[770px]:w-6'></p>
                </div>
                {
                    showWrongSigningIn?<div className='bg-red-500 text-white text-[18px] px-5 py-3 rounded-md'>
                        wrong process , try again 
                    </div>:''
                }
                <form onSubmit={(e)=>handlelogin(e)} className='flex flex-col gap-3'>
                    <input type='email' placeholder='Email' onChange={(e)=>setemail(e.target.value)} required className={`py-2 px-5 pr-24 border border-black ${showWrongSigningIn?'border-red-700':''}`}/>
                    <input type='password' placeholder='Password' onChange={(e)=>setpassword(e.target.value)} required className={`py-2 px-5 pr-24 border border-black ${showWrongSigningIn?'border-red-700':''}`}/>
                    <div className='flex justify-between text-sm text-gray-800 mt-[-5px]'>
                        <p className='cursor-pointer'>Forgot your password?</p>
                        <p className='cursor-pointer' onClick={()=>navigate('/signup')}>Create account</p>
                    </div>
                    <button type='submit' className='px-5 py-3 bg-black text-white w-1/3 self-center rounded-md mt-5'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
