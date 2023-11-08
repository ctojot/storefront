'use strict';

// here begins our redux configuration
import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories';
import productsReducer from './products';

const reducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});



export default createStore(reducer);