import { useEffect, useState } from "react";
import Titulos from "./Titulos"
import Detalle from "./Detalle";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const DetalleContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id; 

    useEffect(() => {

        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    { ...resp.data(), id: resp.id }
                );
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