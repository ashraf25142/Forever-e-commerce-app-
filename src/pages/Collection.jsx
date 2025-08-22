import { useContext, useEffect, useState,/* useReducer */} from 'react'
import Title from '../components/Title'
import ShopContext from '../context/shopcontext/ShopCreateContext'
import ProductCard from '../components/ProductCard';
import { assets } from '../assets/assets' 
import { useLocation } from 'react-router-dom';

const Collection = () => {

  const {products} = useContext(ShopContext);
  const [dropdown,setdropdown] = useState(false);
  const [filteredproducts,setfilteredproducts] = useState([]);
  const [catagory,setcatagory] = useState([]);
  const [subcatagory,setsubcatagory] = useState([]);
  const [sortBy,setsortBy] =useState('revelant');
  const [search,setsearch] = useState(false);
  const [searchContent,setsearchContent] = useState('');
  const location = useLocation();
  useEffect(() => {
  const showsearch = location.state?.search || false;
  setsearch(showsearch);
  }, [location.state]);

  const catagorytoggle =(e)=>{
    catagory.includes(e.target.value)? setcatagory((prev)=>prev.filter((item)=>item!==e.target.value))
    :setcatagory([...catagory,e.target.value])
  }
  const subcatagorytoggle =(e)=>{
    subcatagory.includes(e.target.value)? setsubcatagory((prev)=>prev.filter((item)=>item!==e.target.value))
    :setsubcatagory([...subcatagory,e.target.value])
  }



  useEffect(()=>{
    let proCopy = products.slice();
    // filtered by category and subcategory
    if(catagory.length > 0){
      proCopy = proCopy.filter((item)=>catagory.includes(item.category))
    }
    if(subcatagory.length > 0){
      proCopy = proCopy.filter((item)=>subcatagory.includes(item.subCategory))
    }
    // filtered by price
    if(sortBy==='Low to High'){
      proCopy = proCopy.sort((a,b)=>a.price-b.price)
    }
    if(sortBy==='High to Low'){
      proCopy = proCopy.sort((a,b)=>b.price-a.price)
    }
    // search
    if(searchContent.trim()!==''){
      proCopy = proCopy.filter((item)=>item.name.toLowerCase().includes(searchContent.toLowerCase())) 
    }

    setfilteredproducts(proCopy);
  },[catagory, products, sortBy, subcatagory,searchContent])


  return (
    <div>
      {search?
      <div className='flex gap-5 py-5 justify-center items-center bg-[#F9FAFB] max-[410px]:flex-col'>
        <div className='flex gap-36 max-[760px]:gap-20 max-[640px]:gap-10 max-[460px]:gap-0 items-center px-5  py-2 max-[360px]:p-1 border border-[#e2e2e2] rounded-full'>
          <input type="text" placeholder='Search' className='outline-none bg-[#F9FAFB]' onChange={(e)=>setsearchContent(e.target.value)}/>
          <img src={assets.search_icon} className='w-4 h-4' alt="" />
        </div>
        <img src={assets.cross_icon} className='w-4 h-4 cursor-pointer' alt='' onClick={()=>setsearch((prev)=> prev?false:true)}/>
      </div>:''}
      <div className='flex mb-60 mt-8 gap-6 max-[470px]:flex-col'>
        <div className='flex-[1] '>
          <div className='flex gap-3 items-center mb-10 max-[470px]:mb-0' onClick={()=>setdropdown((prev)=>!prev)}>
            <h1 className='text-2xl'>FILTERS</h1>
            <img src={assets.dropdown_icon} alt='' className={`w-2 hidden max-[470px]:inline ${dropdown?'rotate-90':''}`}/> 
          </div>
          <div className={`border p-4 max-[470px]:hidden ${dropdown?'!block':''}`}>
            <h1 className='mb-3'>CATEGORIES</h1>
            <div className='flex gap-3'>
              <input type="checkbox" name='catagory' value={'Men'} id='Men' onChange={catagorytoggle}/>
              <label for='Men'>Men</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" name='catagory' value={'Women'} id='Women' onChange={catagorytoggle}/>
              <label for='Women'>Women</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" name='catagory' value={'Kids'} id='Kids' onChange={catagorytoggle}/>
              <label for='Kids'>Kids</label>
            </div>
          </div>
          <div className={`border p-4 max-[470px]:hidden ${dropdown?'!block':''}`}>
            <h1 className='mb-3'>TYPE</h1>
            <div className='flex gap-3'>
              <input type="checkbox" name='type' value={'Topwear'} id='Topwear' onChange={subcatagorytoggle}/>
              <label for='Topwear'>Topwear</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" name='type' value={'Bottomwear'} id='Bottomwear' onChange={subcatagorytoggle}/>
              <label for='Bottomwear'>Bottomwear</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" name='type' value={'Winterwear'} id='Winterwear' onChange={subcatagorytoggle}/>
              <label for='Winterwear'>Winterwear</label>
            </div>
          </div>
        </div>
        <div className='flex-[4] '>
          <div className='flex justify-between items-start mb-8 max-[712px]:flex-col'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} className={'!text-3xl !mt-0 max-[878px]:!text-2xl  max-[812px]:!text-xl'}/>
            <select name='sort' onChange={(e)=>setsortBy(e.target.value)} className='border outline-none h-11 rounded-md px-2 max-[820px]:text-[15px] max-[820px]:px-0 max-[730px]:text-[12px] max-[730px]:h-7'>
              <option value={'Relavent'}>Relavent</option>
              <option value={'Low to High'}>Low to High</option>
              <option value={'High to Low'}>High to Low</option>
            </select>
          </div>
          <div className='grid grid-cols-4 gap-4 justify-items-center items-start max-[1200px]:grid-cols-3 max-[1020px]:grid-cols-2 max-[820px]:grid-cols-1'>
            {
              filteredproducts.map((e)=>{
                return <ProductCard key={e._id} id={e._id} image={e.image[0]} name={e.name} price={e.price}
                
                          className='!w-[203px]'/>
              })
            }
          </div>
        </div>
    </div>
    </div>
  )
}
export default Collection