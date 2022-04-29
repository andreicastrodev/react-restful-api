import React from 'react';

const CartContext = React.createContext({
    items: [],
    availableItems: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
    addAvailableItems: (items) => { }
});

export default CartContext;