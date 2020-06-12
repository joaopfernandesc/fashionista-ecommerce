import React from 'react';
import Products from '../../containers/Products';
import { useSelector } from 'react-redux';

const MainRoute = () => {
    const store = useSelector(state => state.products)

    return (
    <div className="container">
        <Products products={store}/>
    </div>)
;}

export default MainRoute;
