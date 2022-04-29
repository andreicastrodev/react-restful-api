import { useReducer } from "react";
import CartContext from "./cart-context";




const defaultState = {
    items: [],
    availableItems: [],
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
                    ...state,
                    items: updatedItems,
                    totalAmount: updatedTotalAmount
                }
            case "ADD_AVAILABLE_ITEMS":
                const availableFoods = [...action.payload]
                return {
                    ...state,
                    availableItems: availableFoods
                }
            case "REMOVE_ITEM":
                const existingCartIndex = state.items.findIndex(item => item.id === action.payload);
                const existingItem = state.items[existingCartIndex];
                let updatedCartItem;
                const updatedTotal = state.totalAmount - existingItem.price;

                console.log(existingItem)
                if (existingItem.amount === 1) {
                    updatedCartItem = state.items.filter(item => item.id !== action.payload)
                } else {
                    const updatedCarItem = {
                        ...existingItem,
                        amount: existingItem.amount - 1
                    }
                    updatedCartItem = [...state.items];
                    updatedCartItem[existingCartIndex] = updatedCarItem

                }


                return {
                    ...state,
                    items: updatedCartItem,
                    totalAmount: updatedTotal
                }

            default:
                return state
        }
    }



    const [cartState, dispatch] = useReducer(cartReducer, defaultState)


    const addItemToCartHandler = (item) => {
        dispatch({ type: "ADD_ITEM", payload: item });
    }

    const addAvailableItemsHandler = (items) => {
        dispatch({ type: "ADD_AVAILABLE_ITEMS", payload: items });
    }


    const removeItemToCartHandler = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        availableItems: cartState.availableItems,
        addItem: addItemToCartHandler,
        addAvailableItems: addAvailableItemsHandler,
        removeItem: removeItemToCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;