import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./layouts/Header";
import './App.css'
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import DetailPage from "./pages/DetailPage";


const BrowserRouter = createBrowserRouter([
  // Aqui van las rutas de la aplicacion
  // ruta exacta
  {
    path: "/", // ruta raiz de la aplicacion
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  { // Esta ruta es dinamica
    path: "/products/:id", // :id es un parametro dinamico
    element:<DetailPage />,
  }
]);


function App() {

  return (
    <>
      <Header />
      <RouterProvider router={BrowserRouter} />
      

    </>
  )
}

export default App
