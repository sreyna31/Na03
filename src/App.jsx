import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProductDetail from "./pages/ProductDetail"

function App(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/product/:id" element={<ProductDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App