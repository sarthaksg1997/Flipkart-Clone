export const addToCartReducer = (state = {cartItems: []},action) => {
    switch (action.type) {
        case 'addSuccessfully':
            const product = action.payload

            const exist = state.cartItems.find(item=> item.id === product.id)

            if(exist) return;

            return {...state, cartItems: [...state.cartItems,product]}

        case 'removeSuccessfully':
            return {...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) }
    
        default:
            return state;
    }
}

