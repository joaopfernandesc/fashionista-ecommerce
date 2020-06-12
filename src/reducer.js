var handler = {
    get: function(target, name) {
      return target.hasOwnProperty(name) ? target[name] : 0;
    }
  };

const INITIAL_STATE = {
    shoppingCart: JSON.parse(window.localStorage.getItem('shoppingCart')) || new Proxy({}, handler),
    totalItems: Number(window.localStorage.getItem('totalItems')) || 0,
    subtotal: Number(window.localStorage.getItem('subtotal')).toFixed(2) || (0).toFixed(2),    
    openShoppingCart: false,
    openSearch: false,
    products: []
}

function reducer(state=INITIAL_STATE, action) {
    const { type, payload } = action

    let { shoppingCart, totalItems, subtotal } = state
    subtotal = Number(subtotal)

    switch (type) {
        case "ADD_TO_CART":
            if (shoppingCart[payload.sku]){
                shoppingCart[payload.sku] += 1
            } else {
                shoppingCart[payload.sku] = 1
            }
            totalItems += 1
            subtotal += payload.actual_price
            subtotal = subtotal.toFixed(2)

            window.localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
            window.localStorage.setItem('totalItems', totalItems)
            window.localStorage.setItem('subtotal', subtotal)
            return {
                ...state,
                shoppingCart,
                totalItems,
                subtotal
            };
        case "LOAD_PRODUCTS":
            return {
                ...state,
                products: payload
            }
        case "HANDLE_SEARCH_FORM":
            return {
                ...state,
                openSearch: payload
            }
        case "HANDLE_SHOPPING_CART":
            return {
                ...state,
                openShoppingCart: payload
            }
        case "REMOVE_FROM_CART":
            if (payload.action === "exclude") {
                totalItems -= shoppingCart[payload.sku]
                subtotal -= payload.actual_price*shoppingCart[payload.sku]
                delete shoppingCart[payload.sku]
            } else {
                subtotal -= payload.actual_price
                shoppingCart[payload.sku] -= 1
                totalItems -= 1
            }

            subtotal = subtotal < 0 ? 0 : subtotal
            subtotal = subtotal.toFixed(2)

            window.localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
            window.localStorage.setItem('totalItems', totalItems)
            window.localStorage.setItem('subtotal', subtotal)

            return {
                ...state,
                shoppingCart,
                totalItems,
                subtotal
            };
        default:
            return state;
    }
}

export default reducer;