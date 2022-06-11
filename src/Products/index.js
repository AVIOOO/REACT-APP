import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from "./style.module.css"
import { useNavigate } from 'react-router-dom'




function Products() {
  let Navigate = useNavigate();





  const [product, setproducts] = useState([])


  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => { setproducts(res.data.products) })
      
     


  }, [])
  return (
    <>
      <h2 style={{ textAlign: "center" }}>PRODUCTS PAGE</h2>
      <div id={styles.productwrapper}>


        {product.map((item, i) => {
          return(
          <div key= {i} className={styles.productcard} onClick={()=>
            {console.log(item.id);
              Navigate('/products/' + item.id)}}>
            <img className={styles.productimge}
            src={item.thumbnail}
            />
            <h2>{item.title}</h2>
            <p>price : <b>{item.price} $</b></p>
            <p>Rating : <b>{item.rating}/5</b></p>
          </div>)

        })}











      </div>

    </>
  )
}

export default Products