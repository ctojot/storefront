'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { setActiveCategory } from '../../store/categories';

const Categories = ({ categories, setActiveCategory }) => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => setActiveCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { setActiveCategory })(Categories);
