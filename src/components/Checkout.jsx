import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import Titulos from './Titulos';

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="container-pedido">
                <Titulos title="Compra realizada exitosamente"/>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (
    <div className="container">
        <h1 className="title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} required/>
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} required/>
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} required/>

            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>
  )
}
export default Checkout