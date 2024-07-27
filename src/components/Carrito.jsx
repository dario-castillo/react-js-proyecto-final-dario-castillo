import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import Titulos from './Titulos';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
            <Titulos title="Tu carrito"/>

        {
            carrito.map((prod) => (
                <div className='carrito-texto' key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <div className='carrito-texto'>
                <h2>Precio total: ${precioTotal()}</h2>
                <button className="vaciar" onClick={handleVaciar}>Vaciar</button>
                <Link className="finalizar-compra" to="/checkout">Finalizar compra</Link>
            </div> :
            <h3>Tu carrito está sin productos</h3>
        }
        
    </div>
  )
}
export default Carrito