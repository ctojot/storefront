import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Categories from './Components/Categories';
import Products from './Components/Products';
import categoriesReducer, { setActiveCategory } from './store/categories';

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Categories />
        <Products />
      </div>
    </Provider>
  );
};

export default App;
