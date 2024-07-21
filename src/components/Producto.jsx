import { useContext } from "react"
import { miContexto } from "./CartProvider"
import Button from "./Button"

function Producto({ producto }){

    const valorDelContexto = useContext(miContexto)

    const handleClick = () => {
        valorDelContexto.fn()
    }

    return (
        <article className="p-4 text-black transition-all bg-purple-200 rounded-md hover:scale-105">
            <h2 className="font-bold">{producto.nombre}</h2>
            <p>${producto.precio}</p>
            <img src={producto.imagen} 
            className="object-contain aspect-square"/>
            <button onClick={handleClick}>Agregar al carrito</button>
            <Button type="link" href={`/item/${producto.id}`}>
                Ver detalle {valorDelContexto.cant}
            </Button>
        </article>
    )
} 
export default Producto