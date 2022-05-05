export default function CartIcon ({count}){
  return(
    <div className="carrito">
      <span className="carrito-icono">
        <img src="images/cartIcon.png" alt="Icono carrito"/>
      </span>
      <span className="carrito-contador">{count}</span>
    </div>
  );
}