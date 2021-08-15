
export const initialState = {
    cart: []
}
const CartReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== 2),
            };

        default:
            return state;
    }
}

export default CartReducer;