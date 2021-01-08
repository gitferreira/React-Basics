import React from "react";

const Product = ({ product, cart, addProduct, products }) => {
  const { name, price, id } = product;
  //Add productHandler
  //Nota = Puedes omitir los paréntesis cuando una arrow function solo tiene un argumento
  const productHandler = (id) => {
    const product = products.filter((product) => product.id === id)[0];
    addProduct([...cart, product]);
  };
  //DeleteHandler
  const deleteHandler = (id) => {
	  const products = cart.filter(product => product.id !== id );
	  //Usar misma función para deletear
	  addProduct(products)
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>{price}€</p>

      {products ? (
        <button type="button" onClick={() => productHandler(id)}>
          Add to cart
        </button>
      ) : (
        <button type="button" onClick = {()=> deleteHandler(id)}>
			Delete
        </button>
      )}
    </div>
  );
};

export default Product;
