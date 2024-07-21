import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"
import { Palette } from "lucide-react"

function Header(){
    return(
        <header className="flex items-center justify-between p-4">
            <NavLink to="/" className="flex items-center gap-2 text-xl font-bold"> <Palette/> Darío Castillo-Dibujante Freelance</NavLink>
            <NavBar isHeader={true}/> 
        </header>
    )
}
export default Header