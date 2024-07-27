import { useEffect, useState } from "react";
import Productos from "./Productos"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ProductosContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;

    useEffect(() => {

        const productosRef = collection(db, "productos");

        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

        getDocs(q)
            .then((resp) => {

                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
            )
            }) 
    }, [categoria])
    
    return (
        <div>
            <Productos productos={productos}/>
        </div>        
    )
}

export default ProductosContainer