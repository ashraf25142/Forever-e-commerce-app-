import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Orders from './pages/Orders'
import Placeorder from './pages/Placeorder'
import Admin from './pages/Admin'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUP from './pages/SignUP'

function App() {

  return (<>
    <Navbar/>
    <div className='w-full px-28 max-[600px]:px-10'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUP/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/placeorder' element={<Placeorder/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App


