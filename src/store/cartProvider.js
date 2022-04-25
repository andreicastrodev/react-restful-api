import { useReducer } from "react";
import CartContext from "./cart-context";




const defaultState = {
    items: [],
    totalAmount: 0
}



const CartProvider = ({ children }) => {


    const cartReducer = (state, action) => {
        switch (action.type) {
            case "ADD_ITEM":
                const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
                const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);
                const existingCartItem = state.items[existingCartItemIndex];
                let updatedItems;

                if (existingCartItem) {
                    const updatedItem = {
                        ...existingCartItem,
                        amount: existingCartItem.amount + action.payload.amount
                    }

                    updatedItems = [...state.items]
                    updatedItems[existingCartItemIndex] = updatedItem;
                } else {
                    updatedItems = state.items.concat(action.payload)
                }

                return {
                    items: updatedItems,
                    totalAmount: updatedTotalAmount
                }
            default:
                return state
        }
    }



    const [cartState, dispatch] = useReducer(cartReducer, defaultState)


    const addItemToCartHandler = (item) => {
        dispatch({ type: "ADD_ITEM", payload: item });
        console.log(cartState)
    }

    const removeItemToCartHandler = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;