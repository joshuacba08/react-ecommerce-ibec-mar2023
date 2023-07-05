import { Link } from "react-router-dom"
import CartWidget from "../components/CartWidget"



const Header = () => {




  return (
    <header className="w-full">
      <div className="flex justify-between items-center p-4 max-w-[1200px] mx-auto">
        <img className="w-28" src="https://bakery-app-pi.vercel.app/assets/logo-dark.1feb706a.png" alt="" />

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/cart">
                <CartWidget />
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header