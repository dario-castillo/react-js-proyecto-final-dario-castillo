import { Palette } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar(props){

    if (props.isHeader == true) {
        return(
            <nav className="flex gap-4 text-lg justify-evenly align">
                <NavLink to="/" className="flex items-center gap-2 text-xl font-bold"> <Palette/> Darío Castillo-Dibujante Freelance</NavLink>
                <NavLink to="/about">About me</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/productos/color">Color</NavLink>
                <NavLink to="/productos/blancoynegro">Blanco y negro</NavLink>
                <CartWidget/>
            </nav>
        )
    } else {
        return(
            <nav className="flex justify-center gap-4 p-2 text-xs">
                <Link to="/facebook">Facebook</Link>
                <Link to="/instagram">Instagram</Link>
                <Link to="/twitter">Twitter</Link>
            </nav>
        )
    }
    }
export default NavBar