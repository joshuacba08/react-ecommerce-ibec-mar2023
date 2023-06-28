import CartWidget from "../components/CartWidget"



const Header = () => {




  return (
    <header className="w-full">
      <div className="flex justify-between items-center p-4 max-w-[1200px] mx-auto">
        <img className="w-28" src="https://bakery-app-pi.vercel.app/assets/logo-dark.1feb706a.png" alt="" />

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>

            <li>
              <CartWidget />
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header