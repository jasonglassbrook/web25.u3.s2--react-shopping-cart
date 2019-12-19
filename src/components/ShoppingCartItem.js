/// external modules ///
import React from 'react';

/// contexts ///
import CartContext from 'contexts/CartContext';

/***************************************
	MAIN
***************************************/
const Item = ({ product }) => {
	const { removeItem } = React.useContext (CartContext);

	return (
		<div className="shopping-cart_item">

			<img src={product.image} alt={`${product.title} book`} />

			<div>
				<h1>{product.title}</h1>
				<p>$ {product.price}</p>
				<button
				onClick={() => { removeItem (product); }}
				>
					Remove from cart
				</button>
			</div>

		</div>
	);
};

/**************************************/

export default Item;
