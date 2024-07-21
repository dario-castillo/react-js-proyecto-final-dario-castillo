import { NavLink } from "react-router-dom"

function NavBar(props){

    const headerLinks =[
        { texto : "About me", ruta : "/about" },
        { texto : "Portfolio", ruta : "/portfolio" },
        { texto : "Shop", ruta : "/shop" },
        { texto : "Color", ruta : "/productos/color" },
        { texto : "Blanco y negro", ruta : "/productos/blancoynegro" },
        { texto : "Carrito", ruta : "/carrito" },
    ]
    const footerLinks = [
        { texto : "Facebook", ruta : "/facebook" },
        { texto : "Instagram", ruta : "/instagram" },
        { texto : "Twitter", ruta : "/twitter" },
    ]

const metodo1 = `flex gap-4 ${props.isHeader ? "items-center text-lg align" : "justify-center p-2 text-xs"}`

return (
    <nav className={metodo1}>
        {props.isHeader ? headerLinks.map((link, indice) =>{
            return <NavLink to={link.ruta} key={indice}>{link.texto}</NavLink>
        })
        : footerLinks.map((link, indice) =>{
            return <NavLink to={link.ruta} key={indice}>{link.texto}</NavLink>
        })
    }
    </nav>
)
}
export default NavBar