import NavBar from "./NavBar"

function Footer(){
    return(
        <footer>
            <p className="p-2 text-xs text-center">Copyright &copy; - Darío Castillo</p>
            <NavBar isHeader={false}/>
        </footer>
    )
}
export default Footer