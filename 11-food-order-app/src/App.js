import React, {useContext} from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header/Header";
import SubHeader from "./components/Layout/SubHeader/SubHeader";
import Meals from "./components/Meals/Meals";

import CartContextProvider from "./store/CartContextProvider";
import CartModalContext from "./store/cart-modal-context";

function App() {
  const cartModalContext = useContext(CartModalContext);

  return (
    <CartContextProvider>
      <Header/>
      <main>        
        <SubHeader />
        <Meals />
        {cartModalContext.showCart && <Cart />}
      </main>
    </CartContextProvider>
  );
}

export default App;
