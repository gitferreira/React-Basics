import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  // Product List
  const [products, setProducts] = useState([
    { id: 1, name: "Shirt", price: 20 },
    { id: 2, name: "Jeans", price: 40 },
    { id: 3, name: "Scarf", price: 120 },
    { id: 4, name: "Shoes", price: 200 },
  ]);

  // Cart

  const [cart, addProduct] = useState([]);

  //Obtener fecha
  const date = new Date().getFullYear();
  return (
    //Ahorras código HTML con Fragment
    <Fragment>
      <Header titulo="Ecommerce" numero={20} />

      <h1>List of Products</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          cart={cart}
          products={products}
          addProduct={addProduct}
        />
      ))}
      <Cart 
      cart = {cart}
      addProduct = {addProduct}

      />

      <Footer date={date} />
    </Fragment>
  );
}

export default App;
