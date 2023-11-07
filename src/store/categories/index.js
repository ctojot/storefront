'use strict';


const initialState = {
  selectedCategory: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export const setActiveCategory = (categoryId) => ({
  type: 'SET_ACTIVE_CATEGORY',
  payload: categoryId,
});

export default categoriesReducer;
