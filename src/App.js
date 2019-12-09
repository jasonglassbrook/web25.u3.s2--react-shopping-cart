/// external modules ///
import React, { useState } from 'react';
import { Route } from 'react-router-dom';

/// components ///
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

/// contexts ///
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

/// data ///
import data from './data';

/***************************************
	MAIN
***************************************/
const App = () => {
	const [ products ] = useState (data);
	const [ cart, setCart ] = useState ([]);

	const addItem = (item) => {
		setCart (
			(cart) => ([ ...cart, item ])
		);
	};

	return (
		<ProductContext.Provider
		value={{ products, addItem }}
		>
			<CartContext.Provider
			value={cart}
			>
				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					<Route
						exact
						path="/"
						render={() => (
							<Products
								products={products}
								addItem={addItem}
							/>
						)}
					/>

					<Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
};

/**************************************/
export default App;
