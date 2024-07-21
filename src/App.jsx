import Header from "./components/Header";
import Main from "/src/components/Main";
import Footer from "/src/components/Footer";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./components/CartProvider";



function App(){

  return (
  <BrowserRouter>
    <CartProvider>
      <Header/>
      <Main/>
      <Footer/>
    </CartProvider>
  </BrowserRouter>
  )
}

export default App;
