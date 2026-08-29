import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Men from "./pages/Men"
import Boys from "./pages/Boys"
import OurStory from "./pages/OurStory"
import Cart from "./pages/Cart"


const App = () => {

  return (
    <>
      <BrowserRouter>
      
      <Routes>
        
        <Route path="/" element={<Layout />}>
        
          <Route index element={<Home />}/>
          <Route path="shop" element={<Shop />}/>
          <Route path="men" element={<Men />}/>
          <Route path="boys" element={<Boys />}/>
          <Route path="ourstory" element={<OurStory />}/>
          <Route path="cart" element={<Cart />} />

        </Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
