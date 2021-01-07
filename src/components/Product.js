import React from 'react';

const Product = ({product, cart, addProduct, products}) => {

	const {name, price, id} = product
	//Add productHandler
	//Nota = Puedes omitir los paréntesis cuando una arrow function solo tiene un argumento
	const productHandler = id => {
		const product = products.filter(product => product.id === id)[0];
		addProduct([
			...cart, product
		])
	}

	return ( 
		<div>
			<h2>{name}</h2>
			<p>{price}€</p>
			<button 
			type = "button"
			onClick = {()=> productHandler(id)}
			>
				Add to cart
			</button>
		</div>
	);
}
 
export default Product;