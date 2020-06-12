import React from 'react';
import { Link } from 'react-router-dom';

import './Product.scss';
import unavailabe from '../../assets/img/not_available.png'

const Product =({product}) => {


    return (
        <article className="product__box">
            <Link to={`/product/${product.name.toLowerCase().replace(/ /g, "-")+ '-' + product.code_color}`}>
                <figure className="product__image">
                        <img src={product.image ? product.image : unavailabe} alt={product.name}/>
                        
                    {product.discount_percentage !== ""  && 
                        <span className="product__image--discount">
                            {product.discount_percentage} OFF
                        </span>  
                    }
                    <div className="product__sizes">
                        {product.sizes.map(size => {
                            if (size.available) {
                                return <div className="product__sizes--unity" key={size.size}>{size.size}</div>
                            }
                        })}
                    </div>
                </figure>
                <div className="product__name">
                    {product.name}
                </div>
                <div className="product__price">
                    {
                        product.actual_price === product.regular_price ? 
                        <span className="product__price--after">{product.actual_price}</span>
                        :
                        <span><span className="product__price--before">{product.regular_price}</span><span className="product__price--after">{product.actual_price}</span></span>
                    }
                </div>
            </Link>
        </article>
    );
}

export default Product;
