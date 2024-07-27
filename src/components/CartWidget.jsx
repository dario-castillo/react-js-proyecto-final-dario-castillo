import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';
import { useContext } from 'react';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito">
            Carrito
            <span className="numero-cant">{cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}
export default CartWidget