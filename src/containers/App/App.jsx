import React, {useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';

import Topbar from '../../components/Topbar';

import Routes from '../../routes';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../actions"

import './App.scss';

function App() {
  const store = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(store)
  useEffect(() => {
    dispatch(addToCart())
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Topbar/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
