import React ,{useState}from 'react'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Products from "./Products"
import About from './About'
import Productspec from './productSpec'




function App() {

  const [isLoggedIn,setisLoggedIn] = useState(false)
  return (
   <>
   <BrowserRouter>
   <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/> 
   <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/products" element={isLoggedIn==true?<Products/>: <Navigate to ="/"/>}/>
     <Route  path="/products/:productId" element={isLoggedIn==true?<Productspec/>: <Navigate to ="/"/>}/>
     <Route  path="/about" element={isLoggedIn==true?<About/>:<Navigate to ="/"/>}/>
     


   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App