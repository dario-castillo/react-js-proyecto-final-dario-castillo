import Header from "./components/Header";
import Main from "/src/components/Main";
import Footer from "/src/components/Footer";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./components/CartContext";


function App(){

  return (
  <CartProvider>
    <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
    </BrowserRouter>
  </CartProvider>  
  )
}

export default App;
