'use strict';

// Where the reducers live

const initialState = {
  list:
    [{
      name: 'ALL',
      displayName: 'ALL',
    }, {
      name: 'CLOTHES',
      displayName: 'T-Shirt',
    }, {
      name: 'TECH',
      displayName: 'Smart Phone',
    }, {
      name: 'MISC',
      displayName: 'AT2020usb+',
    }],
  activeCategory: {
    name: 'ALL',
    displayName: 'All'
  }
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CATEGORY_SELECTED':
      return {
        ...state,
        activeCategory: payload
      }
    default:
      return state;
  }  
}

export const selectCategory = (category) => {
  return {
    type: 'CATEGORY_SELECTED',
    payload: category,
  }
}

export default reducer;
