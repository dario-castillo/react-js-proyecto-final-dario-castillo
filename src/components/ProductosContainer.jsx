import { buscarDatos } from "../buscarDatos";
import { useEffect, useState } from "react";
import Productos from "./Productos"
import { useParams } from "react-router-dom";

const ProductosContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;

    useEffect(() => {
      buscarDatos()
        .then((res) => {
            if (categoria){
                setProductos(res.filter((prod) => prod.categoria === categoria));
            } else {
                setProductos(res);
                }
        })     
    }, [categoria])
    
    return (
        <div>
            <Productos productos={productos}/>
        </div>        
    )
}

export default ProductosContainer