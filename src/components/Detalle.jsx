import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount"

const Detalle = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }



    return (
        <div className="container">
        <div className="producto-detalle">
        <img src={item.imagen}/>
        <div>
            <h3 className="nombre">{item.nombre}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <p className="categoria">Categoría: {item.categoria}</p>
            <p className="precio">${item.precio}</p>
            <ItemCount
                cantidad={cantidad}
                handleSumar={handleSumar}
                handleRestar={handleRestar}
                handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
            />
        </div>
        </div>
        </div>
    )
}
export default Detalle