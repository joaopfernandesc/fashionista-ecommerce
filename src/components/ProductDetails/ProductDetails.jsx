import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { addToCart } from "../../actions"

import { useSelector, useDispatch } from 'react-redux';
import unavailable from '../../assets/img/not_available.png'

import './ProductDetails.scss'

const ProductDetails = () => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const [productName, setProductName] = useState("")
    const [sku, setSku] = useState("")
    const { product_alias } = useParams()
    const dispatch = useDispatch()
    const productCode = product_alias.split("-")
    const codeColor = productCode.slice(-1)[0]
    const products = useSelector(state => state.products)
    const [sizeWarning, setSizeWarning] = useState(false)

    const [sizesAvailable, setSizesAvailable] = useState([])


    useEffect(() => {
        let sizes = [];
        if (selectedProduct?.sizes){
            selectedProduct.sizes.map(size => {
                if (size.available) {
                    sizes.push(size)
                }
            })
            setSizesAvailable(sizes)
        }
        return ;
    }, [selectedProduct])

    useEffect(() => {
        productCode.pop()
        const name = productCode.slice(-2).join(" ").toUpperCase()
        setProductName(name)
    }, [codeColor, productCode])

    useEffect(() => {
        if (products) {
            const product = products.filter(prod => {
                if (prod.name.includes(productName) && prod.code_color === codeColor){
                    return prod;
                }
            })[0]
    
            setSelectedProduct(product)
        }
    }, [products, productName, codeColor])


    function handleSizeSelect(sizeSku) {
        setSku(sizeSku)
    }
    
    function handleAddToCart() {
        if (sku){ 
            const actual_price = Number(selectedProduct.actual_price.split(" ").slice(-1)[0].split(",").join("."))
            dispatch(addToCart({sku, actual_price}))
            setSizeWarning(false)
        } else {
            setSizeWarning(true)
        }
    }

    return (
        <div>
            { selectedProduct && 
            <div className="details"> 
                <div className="details__image">
                    <img src={selectedProduct.image ? selectedProduct.image : unavailable } alt={selectedProduct.name}/>
                </div>
                <div className="details__product">
                    <div className="details__product__name">{selectedProduct.name}</div>
                    <div>
                        <span className="details__product__pricing">
                            { selectedProduct.actual_price === selectedProduct.regular_price 
                            ? selectedProduct.actual_price :
                            <span>
                                <span className="details__product__pricing--before">{selectedProduct.regular_price}</span><span className="details__product__pricing--after">{selectedProduct.actual_price}</span>
                            </span>}
                        </span>
                        { 
                            selectedProduct.installments !== "" && 
                            <span className="details__product__installments">
                                em até {selectedProduct.installments}
                            </span>
                        }
                    </div>
                    <div>
                        {sizesAvailable.map(size => {
                            return (
                                <button 
                                    className={size.sku === sku 
                                        ? "details__product__size details__product__size--selected" 
                                        : "details__product__size"}
                                    key={size.size} 
                                    onClick={() => handleSizeSelect(size.sku)}
                                >
                                    {size.size}
                                </button>)
                        })}
                    </div>
                    <div className="details__product__add-to-cart">
                        <button onClick={() => handleAddToCart()}>Adicionar à sacola</button>
                    </div>
                    {
                        sizeWarning && <div className="details__product__warning">É necessário selecionar um tamanho</div>
                    }
                </div>
            </div>}
        </div>
    )
}

export default ProductDetails;