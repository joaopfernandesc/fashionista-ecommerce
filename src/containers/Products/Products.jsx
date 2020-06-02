import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Product from '../../components/Product'

import './Products.scss';

function Products({ products }) {
    return (
        <div>
            <section className="products-list">
                {
                    products.length > 0
                    ?
                    products.map(product => <Product product={product} key={product.code_color}/>)
                    :
                    <div>Não há produtos para exibir</div>
                }
            </section>
        </div>
    );
}

export default Products;
