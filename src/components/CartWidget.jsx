import { MdShoppingCart } from "react-icons/md";

const CartWidget = () => {
  return (
    <div className="relative">
        <MdShoppingCart className="text-3xl" />
        <div className="flex justify-center items-center absolute top-[-5px] left-4 w-5 h-5 rounded-full bg-yellow-200">
            <span className="text-blue-gray-700">0</span>
        </div>
    </div>
  )
}

export default CartWidget