/// external modules ///
import React from 'react';

/// contexts ///
import CartContext from 'contexts/CartContext';

/***************************************
	MAIN
***************************************/
const Item = (props) => {
	const { removeItem } = React.useContext (CartContext);

	return (
		<div className="shopping-cart_item">

			<img src={props.image} alt={`${props.title} book`} />

			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button
				onClick={() => { removeItem (props.id); }}
				>
					Remove from cart
				</button>
			</div>

		</div>
	);
};

/**************************************/

export default Item;
