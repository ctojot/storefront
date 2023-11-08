'use strict';

// Unit Tests

import reducer from './index';
import { createStore } from 'redux';

describe('Testing catergories reducer', () => {
  test('Should contain state with activeCatergory, products, and displayProducts', () => {

    let store = createStore(reducer);
    
    let state = store.getState();

    expect(state.activeCategory.name).toEqual('ALL');
    expect(state.list.length).toEqual(4);
    expect(state.categories.length).toEqual(3);
    expect(state.displayProducts.length).toEqual(0);
  });
});