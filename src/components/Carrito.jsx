import { useState } from "react"
import Input from "./Input"
import Button from "./Button"
import Titulos from "./Titulos"

const Carrito = () => {
    const [data, setData] = useState(0)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleStateUplifting = (long) => {
        setData(long)
        if(long > 35) {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <div>
            <Titulos title="Tu carrito de compras"/>
            <p className="mb-3 text-purple-600" >Por favor completa el formulario para enviar tu pedido</p>
            <p>Los campos aceptan 35 caracteres.</p>
            <p className="mb-3">Llevás {data} caracteres</p>
            {error ? <p className="text-sm font-normal text-blue-600">Muy largo! Probá con menos 😉</p> : null }
            <form onSubmit={handleSubmit} className="text-purple-600" >
                <div className="flex flex-col items-start mb-3">
                    <label htmlFor="nombre">Tu nombre y apellido</label>
                    <Input onStateUplifting={handleStateUplifting}/>
                </div>  
                <div className="flex flex-col items-start mb-3">
                    <label htmlFor="email">Tu e-mail</label>
                    <Input onStateUplifting={handleStateUplifting}/>
                </div>  
                <Button type="primary">Enviar</Button>
            </form>
        </div>
    )

}
export default Carrito