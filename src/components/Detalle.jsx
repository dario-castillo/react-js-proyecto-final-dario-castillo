import ItemCount from "./ItemCount"

const Detalle = ( {item} ) => {
    return (
        <div className="container">
        <div className="producto-detalle">
        <img src={item.imagen}/>
        <div>
            <h3 className="nombre">{item.nombre}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <p className="categoria">Categoría: {item.categoria}</p>
            <p className="precio">${item.precio}</p>
            <ItemCount item={item}/>
        </div>
        </div>
        </div>
    )
}
export default Detalle