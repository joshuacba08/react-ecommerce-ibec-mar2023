import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdShoppingCart } from "react-icons/md";


const CartWidget = () => {
  
  const { cart } = useContext(CartContext);

  const getTotalQty = ( arrayCart ) => {
      return arrayCart.reduce( (acc, prod) => acc + prod.qty, 0) // sumo las cantidades de los productos del carrito
  }
  
  return (
    <div className="relative">
        <MdShoppingCart className="text-3xl" />
        <div className="flex justify-center items-center absolute top-[-5px] left-4 w-5 h-5 rounded-full bg-yellow-200">
            <span className="text-blue-gray-700">{ getTotalQty(cart) }</span>
        </div>
    </div>
  )
}

export default CartWidget