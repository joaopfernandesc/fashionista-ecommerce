const INITIAL_STATE = {
    shoppingCart: [],
    openShoppingCart: false,
    openSearch: false
}

function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                shoppingCart: ['teste']
            };
        default:
            return state;
    }
}

export default reducer;