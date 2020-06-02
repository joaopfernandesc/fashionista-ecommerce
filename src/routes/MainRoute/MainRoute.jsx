import React, { useState, useEffect } from 'react';
import Products from '../../containers/Products';

const MainRoute = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
            .then((res) => res.json())
            .then(data => setProducts(data));
    }, [])

    return (<div className="container">
        <Products products={products}/>
    </div>)
;}

export default MainRoute;
