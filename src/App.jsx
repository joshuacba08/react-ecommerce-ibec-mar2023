import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./layouts/Header";
import './App.css'
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import DetailPage from "./pages/DetailPage";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";




function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        
        <Header /> {/* Header fuera de las rutas para que se muestre en todas las páginas */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
