/// external modules ///
import React from 'react';

/// components ///
import { NavLink } from 'react-router-dom';

/***************************************
	MAIN
***************************************/
const Navigation = props => {
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{props.cart.length}</span>
			</NavLink>
		</div>
	);
};

/**************************************/

export default Navigation;
