import React from 'react';
import { useDispatch } from 'react-redux'

import unavailable from '../../assets/img/not_available.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { removeFromCart, addToCart } from '../../actions'

const CartProduct = ({ product }) => {

    const dispatch = useDispatch()

    function handleQuantity(symbol) {
        const actual_price = Number(product.actual_price.split(" ").slice(-1)[0].split(",").join("."))
        if (symbol === 'minus') {
            if (product.quantity > 1) {
                dispatch(removeFromCart({sku: product.sku, action: "subtract", actual_price}))
            }
        } else if (symbol === 'plus') {
            dispatch(addToCart({sku: product.sku, actual_price}))
        } else {
            dispatch(removeFromCart({sku: product.sku, action: "exclude", actual_price}))
        }
    }

    return (
        <div className="result">
            <div className="result__image">
                <img src={product.image ? product.image : unavailable} alt={product.name}/>
            </div>
            <div className="result__info">
                <div className="result__info__name">
                    {product.name}
                    <div className="result__info__alternative">
                        Tam: {product.size}
                    </div>
                </div>
                <div className="result__info__price">
                    <div>{product.actual_price}</div>
                    <div className="result__info__alternative">{product.installments}</div>
                </div>
                <div className="result__info__quantity">
                    <div>
                        No Carrinho:
                    </div>
                    <div>
                        <span className="result__info__quantity-helper">
                            <button 
                                className="result__info__quantity-icon"
                                onClick={() => handleQuantity('minus')}
                            >
                                <FontAwesomeIcon icon={faMinusCircle}/>
                            </button>
                        </span>
                        <span className="result__info__quantity-helper">
                            {product.quantity}
                        </span>
                        <span className="result__info__quantity-helper">
                            <button 
                                className="result__info__quantity-icon"
                                onClick={() => handleQuantity('plus')}
                            >
                                <FontAwesomeIcon icon={faPlusCircle}/>
                            </button>
                        </span>
                    </div>
                    <div>
                        <button 
                            className="result__info__quantity-remove"
                            onClick={() => handleQuantity(true)}
                        >
                            Remover do carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct