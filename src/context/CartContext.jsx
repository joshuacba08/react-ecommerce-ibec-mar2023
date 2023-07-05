// implementar context
import { createContext, useState } from 'react';

export const CartContext = createContext(); // creo el contexto y lo exporto para usarlo en otros componentes


export const CartProvider = ({children}) => { // creo el provider y lo exporto para usarlo en otros componentes

    const [cart, setCart] = useState([]); // creo el estado inicial del carrito

    // creamos las funciones que vamos a usar en el contexto
    const addItem = (item, qty) => {
        // verificamos si el item ya esta en el carrito
        if( cart.some( prod => prod.id === item.id) ){ // si el item ya esta en el carrito
            const newCart = cart.map( prod => { // recorro el carrito y busco el item que quiero agregar
                if( prod.id === item.id){ // si el item es el que quiero agregar
                    prod.qty += qty;
                }
                return prod // retorno el item del carrito
            });
            setCart(newCart); // actualizo el carrito

        }else{ // si el item no esta en el carrito
            const newItem = {...item, qty}; // creo un nuevo item con la cantidad
            setCart([...cart, newItem]); // agrego el item al carrito
        }

    }    

    return (
        <CartContext.Provider value={{
            // aca van los valores que quiero compartir
            cart,
            addItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

