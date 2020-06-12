export function addToCart(sku) {
    return {
        type: "ADD_TO_CART",
        payload: sku
    }
}

export const removeFromCart = (message) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: message
    }
}

export const loadProducts = (message) => {
    return {
        type: "LOAD_PRODUCTS",
        payload: message
    }
}

export const handleSearchForm = (message) => {
    
    return {
        type: "HANDLE_SEARCH_FORM",
        payload: message
    }
}

export const handleShoppingCart = (message) => {
    
    return {
        type: "HANDLE_SHOPPING_CART",
        payload: message
    }
}
