import Producto from "./Producto"

function Productos({ productos }) {

    return (
        <div className="container">
            <div className="productos">
                { productos.map((prod) =>
                    <Producto producto={prod} key={prod.id} />)}
            </div>
        </div>
    )
}
export default Productos