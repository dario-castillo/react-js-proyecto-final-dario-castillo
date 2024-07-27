import React from "react"
import { Link } from "react-router-dom"

const Producto = ( {producto} ) => {
    return (
        <div className="producto">
            <img src={producto.imagen} alt={producto.nombre} />
            <div>
                <h3>{producto.nombre}</h3>
                <p>Precio: ${producto.precio}</p>
                <p>Categoría: {producto.categoria}</p>
                <Link className="ver-detalle" to= {`/item/${producto.id}`}>Ver detalle</Link>
            </div>
        </div>
    )
}
export default Producto
