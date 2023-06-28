import Banner from "../components/Banner"
import ItemsListContainer from "../components/ItemsListContainer"

const ProductsPage = () => {
  return (
    <main>        
        <Banner bgImage={'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}>
            <h1 className="text-5xl font-semibold">Productos</h1>
        </Banner>
        
        <p>En la pagina de productos</p>
        <ItemsListContainer />
    </main>
  )
}

export default ProductsPage