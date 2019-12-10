/// external modules ///
import React from 'react';

/// components ///
import Item from './ShoppingCartItem';

/// contexts ///
import CartContext from 'contexts/CartContext';
import ProductContext from 'contexts/ProductContext';

/***************************************
	MAIN
***************************************/
const ShoppingCart = () => {
	const { cart } = React.useContext (CartContext);
	const { products } = React.useContext (ProductContext);
	const items = products.filter ((item) => (cart.includes (item.id)));

	const getCartTotal = () => {
		return (
			items
			.reduce ((acc, value) => (acc + value.price), 0)
			.toFixed (2)
		);
	};

	return (
		<div className="shopping-cart">

			{items.map (item => (
				<Item key={item.id} product={item}/>
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>

		</div>
	);
};

/**************************************/

export default ShoppingCart;
