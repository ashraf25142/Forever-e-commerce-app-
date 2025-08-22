import {  useEffect, useState } from 'react';
import {products} from '../../assets/assets'
import ShopContext from './ShopCreateContext'
import {db} from '../../../config/Firebase'
import { setDoc ,doc, getDoc} from "firebase/firestore"; 

const ShopContextProvider = ({children}) =>{


    const currency ='$';
    const delivery_fee =10;
    const [cart , setcart] = useState([]);
    const [Totalmoney,setTotalmoney] = useState(0);
    const [loggedIn,setloggedIn] = useState(false);
    const [userid,setuserid] = useState('');
    const [cartLoadedFromFirestore, setCartLoadedFromFirestore] = useState(false);
    const [orders, setorders] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem("cart")){
            setcart(JSON.parse(localStorage.getItem("cart")))
        }
        const handleOrders = async (id) => {
            try{
                const copyOrders = await getDoc(doc(db,'users',id))
            if(copyOrders.exists()){
                setorders(copyOrders.data().orders)
            }
            } catch(e){
                    console.log(e)
                }  
            }
        handleOrders(userid);
        const putProductsInFireStore = async () => {
            const copyproducts = await getDoc(doc(db,'products'))
            if(copyproducts.exists())return;
            else{
                try{
                    await setDoc(doc(db,'products'),{
                    products:products
                })
                }catch(e){
                    console.log(e)
                }
            }
        }   
        putProductsInFireStore();
    },[userid])
    useEffect(()=>{
        if (!cartLoadedFromFirestore) return;
        localStorage.setItem("cart", JSON.stringify(cart));
        const handlecart = async (id) => {
                try{
                    await setDoc(doc(db,'users',id),{
                        cart:cart
                    },{ merge: true })
                }catch(e){
                    console.error(e);
                }
            }
        if(userid.length>0){handlecart(userid)}
    },[cart, cartLoadedFromFirestore, userid])

    const value={
        products,currency,delivery_fee,cart,setcart,loggedIn,setloggedIn,
        Totalmoney,setTotalmoney,setuserid,userid,cartLoadedFromFirestore,setCartLoadedFromFirestore,
        orders,setorders
    }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;