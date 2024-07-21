import { Route , Routes } from "react-router-dom";
import ProductosContainer from "./ProductosContainer";
import Home from "./Home";
import Carrito from "./Carrito";
import DetalleContainer from "./DetalleContainer";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

function Main(){
    return(
        <main className="p-8 pb-20 bg-purple-300 grow">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutMe/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/shop" element={<ProductosContainer/>}/>
                <Route path="/item/:id" element={<DetalleContainer/>}/> 
                <Route path="/productos/:categoria" element={<ProductosContainer/>}/> 
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
        </main> 
    )
}
export default Main