import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';

import './Product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Product({product}) {
    const [sizesAvailable, setSizesAvailable] = useState([])

    useEffect(() => {
        let sizes = [];
        product.sizes.map(size => {
            if (size.available) {
                sizes.push(size.size)
            }
        })
        setSizesAvailable(sizes)
    }, [])

    return (
        <article className="product__box">
            <Link to={`product/${product.name.toLowerCase().replace(/ /g, "-")}`}>
                <figure className="product__image">
                    {
                        product.image ?
                        <img src={product.image} alt={product.name}/>
                        :
                        <div className="product__unavailable">
                            <div className="product__unavailable--text">
                                <p>
                                    Imagem indisponível.
                                    <br></br><FontAwesomeIcon icon={faHeartBroken} key="heart-broken"/>
                                </p>
                            </div>
                        </div>
                    }
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
