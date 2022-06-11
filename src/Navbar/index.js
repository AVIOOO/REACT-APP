import React from 'react'
import styles from "./style.module.css"
import {Link} from "react-router-dom"

function Navbar( {setisLoggedIn,isLoggedIn}) {
    function RenderButton(){
        if (isLoggedIn==true){
            return<button style= {{backgroundColor:"yellow"}} onClick={()=>{setisLoggedIn(false)}}>LOGOUT</button>
        }else{
            return<button style= {{backgroundColor:"red"}}onClick={()=>{setisLoggedIn(true) }}>LOGIN</button>
        }





    }




  return (
    <>
    <header className={styles.header}>
    <Link to ="/"style= {{backgroundColor:"blue"}} > HOME  </Link>
       <Link to ="/Products"style= {{backgroundColor:"yellow"}} > PRODUCTS</Link>
       <Link to ="/about"style= {{backgroundColor:"pink"}} > ABOUT </Link>
       <RenderButton/>
    



    </header>
    </>
  )
}

export default Navbar