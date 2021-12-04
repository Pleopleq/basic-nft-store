import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState({
    items: [],
    subTotalPrice: 0,
    discountCode: 0,
    discount: 0,
    totalPrice: 0 
  })

  return (
    <div className="App">
      <div className="main-container">
        <header className="store-title">
          <h1>NFT STORE</h1>
        </header>
        <div className="store-container">
          <ProductList cart={cart} setCart={setCart}></ProductList>
          <Cart cart={cart} setCart={setCart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
