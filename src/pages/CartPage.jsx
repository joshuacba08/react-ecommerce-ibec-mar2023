import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartPage = () => {

  const { cart } = useContext(CartContext)

  return (
    <main>
        <h2 className="text-xl font-medium">Cart List</h2>

        <ul>
            {cart.map( prod => <li key={prod.id}> { prod.productName } - {prod.qty}: $ {prod.qty * prod.price} </li>)}
        </ul>

    </main>
  )
}

export default CartPage