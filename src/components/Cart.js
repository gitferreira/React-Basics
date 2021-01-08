import React from 'react';
import "./cart.css";
import Product from "./Product";

const Cart = ({cart, addProduct}) => (

<div className = "cart">
	<h2>Your Cart:</h2>
	
		{ cart.length === 0
		
		?
			<p>Not items found</p>
		: cart.map(product => (
			<Product
			key = {product.id}
			product = {product}
			cart = {cart}
			addProduct = {addProduct}
			/>
			))}
	
</div> )
 
export default Cart;