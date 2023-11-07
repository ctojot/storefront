'use strict';

// here begins our redux configuration
import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories';
import productsReducer from './products';
import activeCategoryReducer from './active-category';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  activeCategory: activeCategoryReducer, // Add activeCategory reducer
  // Add other reducers if needed
});

const store = createStore(rootReducer);

export default store;