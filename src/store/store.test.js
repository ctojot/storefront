import store from './index'

describe('Testing global redux store', () => {
  test('Should have a category and product info', () => {

    let state = store.getState();

    expect(state.products.list.length).toEqual(3);
    expect(state.products.displayList.length).toEqual(0);
    expect(state.categories.list.length).toEqual(4);
    expect(state.categories.activeCategory.name).toEqual('ALL');
  });
});