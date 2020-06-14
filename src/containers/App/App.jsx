import React, {useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';

import Topbar from '../../components/Topbar';
import SearchForm from '../../containers/SearchForm';
import Routes from '../../routes';

import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../../actions'

import './App.scss';
import ShoppingCart from '../ShoppingCart';
import Footer from '../../components/Footer/Footer';

function App() {
  const store = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
      fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
          .then((res) => res.json())
          .then(data => dispatch(loadProducts(data)));
  }, [dispatch])

  return (
    <div className={ (store.openSearch || store.openShoppingCart) ? "App App--is-open" : "App"}>
      <BrowserRouter>
        <Topbar/>
        <SearchForm/>
        <ShoppingCart/>
        <Routes/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
