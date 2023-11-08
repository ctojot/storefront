'use strict';

const initialState = {
  displayList: [],
  list: [{
    category: 'CLOTHES',
    name: 'T-Shirt',
    description: 'Plain white T-shirt',
    price: 10,
    inventory: 45,
  },
  {
    category: 'TECH',
    name: 'Smart Phone',
    description: 'Android Smart Phone',
    price: 250,
    inventory: 6,
  },
  {
    category: 'MISC',
    name: 'AT2020+usb',
    description: 'Audio Technica cardioid microphone',
    price: 100,
    inventory: 20,
  }],
  activeCategory: {
    name: 'ALL',
    displayName: 'ALL'
  }
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CATEGORY_SELECTED':
      return {
        ...state,
        displayList: filterProducts(state, payload),
      }
    default:
      return state;
  }
}

function filterProducts(state, payload) {
  if (payload.name === 'ALL') {
    return state.list;
  }
  let results = state.list.filter(product =>
    product.category === payload.name
  )
  console.log(results);
  return results;
}

export default reducer;