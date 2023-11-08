import React from 'react';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import Categories from './Components/Categories/index';
import { Provider } from 'react-redux';
import Products from './Components/Products/index';
import store from './store';
import './App.css'

function App() {
  const storeName = 'Clothing Store';
  return (
  
    <Provider store ={store}>
      <Header storeName={storeName}/>
      <Categories />
      <Products />
      <Footer />
    </Provider>
  )
}

export default App