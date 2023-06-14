import { useEffect, useState } from 'react';
import Item from './Item';

// Este componente será el encargado de mostrar los productos que se encuentran en el catálogo. (smart component)
const ItemsListContainer = () => {
    const URL = 'https://run.mocky.io/v3/945ebc53-6e6c-458f-a54d-78c637ac6d54'; // URL de la API
    const [items, setItems] = useState([]); // Estado inicial de items es un array vacío

    // useEffect es un hook que se ejecuta cuando el componente se monta, y cada vez que se actualiza el estado que esta dentro del array de dependencias
    useEffect( ()=>{ // useEffect se ejecuta cuando el componente se monta
         /* bloque de codigo que se ejecuta */
         fetch(URL)
          .then( response => response.json() ) // response.json() devuelve una promesa que se resuelve con el contenido del body parseado como JSON  
          .then( data => setItems(data) ) // data es el contenido del body parseado como JSON
          .catch( error => console.log(error) ) // error es el error que se produjo en la petición
    }, [] )



  return (
    <div className=''>

      <div className='my-16 flex flex-wrap justify-center gap-6'>
        {
          items.length > 0 
            ? items.map( prod => <Item key={prod.id} product={prod}/> )
            : <h6>Cargando productos...</h6> 
        }
      </div>

    </div>
  )
}

export default ItemsListContainer