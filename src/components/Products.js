/// external modules ///
import React from 'react';

/// components ///
import Product from './Product';

/***************************************
	MAIN
***************************************/
const Products = props => {
	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

/**************************************/

export default Products;
