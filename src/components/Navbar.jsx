import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ShopContext from '../context/shopcontext/ShopCreateContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/Firebase';
function Navbar() {

    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const {cart,loggedIn,setloggedIn} = useContext(ShopContext);
    const handleLogOut = async () => {
        setloggedIn(false);
        await signOut(auth);
        navigate('/');
        console.log(loggedIn)
    }
    return (
        <>
        <div className='py-5 px-28 max-[600px]:px-10 flex items-center justify-between bg-white z-10'>
            <img src={assets.logo} alt='' className='w-[150px] cursor-pointer max-[370px]:w-[100px]' onClick={()=>navigate('/')}/>
            <ul className='flex gap-6  max-[860px]:hidden'>
                <NavLink to='/' className='flex flex-col items-center justify-center gap-1 font-semibold text-gray-700 '>
                        <p>HOME</p>
                        <hr className='hidden w-1/2 border-none bg-gray-700 h-[1.5px] '/>
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center justify-center gap-1 font-semibold text-gray-700 '>
                        <p>COLLECTION</p>
                        <hr className='hidden w-1/2 border-none bg-gray-700 h-[1.5px] '/>
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center justify-center gap-1 font-semibold text-gray-700 '>
                        <p>ABOUT</p>
                        <hr className='hidden w-1/2 border-none bg-gray-700 h-[1.5px] '/>
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center justify-center gap-1 font-semibold text-gray-700 '>
                        <p>CONTACT</p>
                        <hr className='hidden w-1/2 border-none bg-gray-700 h-[1.5px] '/>
                </NavLink>
            </ul>
            <div className='flex items-center gap-5'>
                <img alt='' src={assets.search_icon} className='w-5 cursor-pointer max-[400px]:w-4' onClick={()=>{
                    setVisible(false)
                    navigate('/collection',{state:{search:true}})
                }}/>
                <div className='group relative' >
                    <img alt='' onClick={()=>loggedIn?()=>{}:navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer max-[400px]:w-4'/>
                    {
                        loggedIn?<div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded z-10'>
                            <p className='cursor-pointer hover:text-black'>Source Code</p>
                            <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={()=>handleLogOut()} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>:''
                    }
                </div>
                <Link to='/cart' className='relative ' onClick={()=>setVisible(false)}>
                    <img alt='' src={assets.cart_icon} className='w-5 cursor-pointer max-[400px]:w-4'/>
                    <p className='absolute left-1/2 top-1/2 bg-black text-white w-4 text-[10px] rounded-full p-[1px] text-center'>
                        {cart.reduce((acc,cur)=>acc+=cur.count,0)}
                    </p>
                </Link>
                <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className='w-5 cursor-pointer hidden max-[860px]:block max-[400px]:w-4'/>
                
            </div>
        </div>
        {visible? <div className='sidemenu flex flex-col w-full h-[400vh] bg-white absolute  z-5 right-0 '>
                        <div onClick={()=>setVisible(false)} className='flex w-fit cursor-pointer mb-6 bg-slate-100 rounded-md p-2'>
                        <img src={assets.dropdown_icon} alt='' className='rotate-180 mr-2 w-3'/>
                        <p className='text-xl'>Back</p>
                        </div>
                        <NavLink onClick={()=>setVisible(false)} to='/' className=' pl-2 font-semibold text-gray-700 '>
                                HOME
                        </NavLink>
                        <NavLink onClick={()=>setVisible(false)} to='/collection' className=' pl-2 font-semibold text-gray-700 '>
                                COLLECTION
                        </NavLink>
                        <NavLink onClick={()=>setVisible(false)} to='/about' className=' pl-2 font-semibold text-gray-700 '>
                                ABOUT
                        </NavLink>
                        <NavLink onClick={()=>setVisible(false)} to='/contact' className=' pl-2 font-semibold text-gray-700 '>
                                CONTACT
                        </NavLink>
                        </div>:''}
    </>)
}

export default Navbar
