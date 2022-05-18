import {productos} from "../../data/products.js"
import ItemDetail from "../ItemDetail/ItemDetail"
import React from "react"


export default function ItemDetailContainer(){


  const[item, setItem] = React.useState([])
    
  const getItem = new Promise((resolve,reject) =>{
      setTimeout(() =>{
          resolve(setItem(productos[14]));
      },3000)
  })
      
    return (
      <ItemDetail item = {item} />  
    )

}
