/// external modules ///
import React from 'react';

/// components ///
import Item from './ShoppingCartItem';

/// contexts ///
import CartContext from 'contexts/CartContext';

/***************************************
	MAIN
***************************************/
const ShoppingCart = () => {
	const cart = React.useContext (CartContext);

	const getCartTotal = () => {
		return cart.reduce ((acc, value) => {
			return acc + value.price;
		}, 0).toFixed (2);
	};

	return (
		<div className="shopping-cart">

			{cart.map (item => (
				<Item key={item.id} {...item}/>
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
