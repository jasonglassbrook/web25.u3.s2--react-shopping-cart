/// external modules ///
import React from 'react';

/// components ///
import { Route } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Products from 'components/Products';
import ShoppingCart from 'components/ShoppingCart';

/// contexts ///
import ProductContext from 'contexts/ProductContext';
import CartContext from 'contexts/CartContext';

/// data ///
import data from './data';

/***************************************
	MAIN
***************************************/
const App = () => {
	const [ products ] = React.useState (data);
	const [ cart, setCart ] = React.useState ([]);

	const addItem = (item) => {
	const [ cart, setCart ] = storage.session.useState ('cart', []);
			(cart) => (
				[ ...cart, item ]
			)
		);
	};

	const removeItem = (id) => {
		setCart (
			(cart) => (
				cart.filter ((item) => (item.id !== id))
			)
		)
	}

	return (
		<ProductContext.Provider
		value={{ products, addItem }}
		>
			<CartContext.Provider
			value={{ cart, removeItem }}
			>
				<div className="App">
					<Navigation/>

					{/* Routes */}
					<Route
						exact path="/"
						component={Products}
					/>

					<Route
						exact path="/cart"
						component={ShoppingCart}
					/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
};

/**************************************/

export default App;
