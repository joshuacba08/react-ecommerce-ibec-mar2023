import { Button } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetailPage = () => {

    const url = 'https://run.mocky.io/v3/945ebc53-6e6c-458f-a54d-78c637ac6d54';// URL de la API
    const { id } = useParams(); // Hook que devuelve un objeto con los parametros de la ruta dinamica
    console.log(id);

    const navigate = useNavigate(); // Hook que devuelve una funcion para navegar a otra ruta

    // vamos a crear un estado para guardar el producto que vamos a mostrar en esta pagina
    const [item, setItem] = useState(null);
    
    // implementamos un useEffect para hacer la peticion a la API
    useEffect( ()=>{

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                // data es el contenido del body parseado como objeto literal
                // vamos a filtrar el array de productos para obtener el producto que tenga el id que recibimos por parametro
                const result = data.find( prod => prod.id === Number(id)) // == compara solo el valor // === compara valor y tipo de dato
                setItem(result);
            })

    } ,[ id ] )

  return (
    <div>
        <p>Id pasado por parámetro: { id }</p>

        {
            item ? 
            <ul>
                <li>Id: { item.id }</li>
                <li>Nombre: { item.productName }</li>
                <li>Descripción: { item.description }</li>
                <li>Precio: { item.price }</li>
                <li>Stock: { item.stock }</li>
                <li> <img className='w-80 h-52 rounded-xl object-cover' src={item.image} alt="" /> </li>
            </ul>
            : <h6>Cargando producto...</h6>
        }

        <Button color="blue" onClick={ ()=> navigate('/products') }>Volver</Button>
    </div>
  )
}

export default DetailPage