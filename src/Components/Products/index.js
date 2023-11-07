'use strict';

import React from 'react';
import { connect } from 'react-redux';

const Products = ({ products, selectedCategory }) => {
  const filteredProducts = products.filter(
    (product) => product.categoryId === selectedCategory
  );

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  selectedCategory: state.categories.selectedCategory,
});

export default connect(mapStateToProps)(Products);
