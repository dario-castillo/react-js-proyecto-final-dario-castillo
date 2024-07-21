import { useEffect, useState } from "react";
import Titulos from "./Titulos"
import { buscarItemPorId } from "../buscarDatos";
import Detalle from "./Detalle";
import { useParams } from "react-router-dom";

const DetalleContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id; 

    useEffect(() => {
        buscarItemPorId(Number(id))
            .then((res) => {
                setItem(res);
            })
    }, [id])

    return (
        <div>
            <Titulos title="Detalle del dibujo"/>
            {item && <Detalle item={item} />}
        </div>
    )
}
export default DetalleContainer