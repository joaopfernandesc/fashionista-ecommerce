import React from 'react';

import './SearchProduct.scss';

import unavailable from '../../assets/img/not_available.png'

const SearchProduct = ({ product }) => {
    return(
        <div className="result">
            <div className="result__image">
                <img src={ product.image === "" ? unavailable : product.image} alt={product.name}/>
            </div>
            <div className="result__info">
                <div className="result__info__name">
                    {product.name}
                </div>
                <div className="result__info__price">
                    <div>{product.actual_price}</div><div className="result__info__alternative">{product.installments}</div>
                </div>
            </div>
        </div>
    )
}

export default SearchProduct