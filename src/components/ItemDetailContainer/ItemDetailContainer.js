import {productos} from "../../data/products.js"
import ItemDetail from "../ItemDetail/ItemDetail"
import React from "react"


export default function ItemDetailtContainer(){


  const[item, setItem] = React.useState([])
    
  const getItem = new Promise((resolve,reject) =>{
      setTimeout(() =>{
          resolve(productos);
      },3000)
  }).then(() => {
      setItem(productos[14]);
  }) 



    return (
        <>           
        <div className="vista-detalle">
          <ItemDetail item = {item} />
        </div>
        </>   

    )

}
