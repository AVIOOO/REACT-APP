import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios';
import styles from "./style.module.css"

function Productspec() {

const [productDetails,setproductDetails]= useState({})
  let Params = useParams();



  useEffect(()=>{
    
    axios.get(`https://dummyjson.com/products/${Params.productId}`)
    .then((res)=>{
      setproductDetails(res.data)

    })
  },[])
  return (
    <>
    <h2 style={{textAlign:"center"}}>PRODUCT SPECIFICATION</h2>

    <div id= {styles.productspec}>
     
      <img
      id={styles.productspecimage}
      src={productDetails.thumbnail}
      
      />
         <h2>{productDetails.title}</h2>
         <p>Brand : <b>{productDetails.brand}</b></p>
         <p>{productDetails.description}</p>
            <p>price : <b>{productDetails.price} $</b></p>
            <p>Rating : <b>{productDetails.rating}/5</b></p>
            <p>stock : <b>{productDetails.stock}</b></p>  
            <p>category : <b>{productDetails.category}</b></p>

        

    </div>
    </>
  )
}

export default Productspec