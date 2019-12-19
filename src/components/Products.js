/// external modules ///
import React from 'react';

/// components ///
import Product from './Product';

/// contexts ///
import ProductContext from 'contexts/ProductContext';

/***************************************
	MAIN
***************************************/
const Products = () => {
	const { products, addItem } = React.useContext (ProductContext);

	return (
		<div className="products-container">

			{products.map ((product) => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}

		</div>
	);
};

/**************************************/

export default Products;
