import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer(){
  return(
    <div className="itemlist-container">
      

      <div className="producto-bloque">
        <span className="producto-nombre">Nike Zoom Next% 2</span>      
        <span className="producto-imagen"><img src="https://alvaroguzmandg.github.io/coderhouse-js2/ENTREGA_FINAL/images/NNN.png" alt="Foto del Producto"/></span>
        <span className="producto-precio">Precio $49.999</span>
        <ItemCount/>
      </div>

      <div className="producto-bloque">
        <span className="producto-nombre">Adidas Ultra Boost 21</span>      
        <span className="producto-imagen"><img src="https://alvaroguzmandg.github.io/coderhouse-js2/ENTREGA_FINAL/images/AUB.png" alt="Foto del Producto"/></span>
        <span className="producto-precio">Precio $33.499</span>
        <ItemCount/>
      </div>
      

    <div className="producto-bloque">
      <span className="producto-nombre">Nike Pegasus 38</span>      
      <span className="producto-imagen"><img src="https://alvaroguzmandg.github.io/coderhouse-js2/ENTREGA_FINAL/images/NPV.png" alt="Foto del Producto"/></span>
      <span className="producto-precio">Precio $26.499</span>
      <ItemCount/>
    </div>
        
      
    </div>
  )
}