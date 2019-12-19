/// external modules ///
import React from 'react';

/// components ///
import { NavLink } from 'react-router-dom';

/// contexts ///
import CartContext from 'contexts/CartContext';

/***************************************
	MAIN
***************************************/
const Navigation = () => {
	const { cart } = React.useContext (CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">
				Products
			</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

/**************************************/

export default Navigation;
