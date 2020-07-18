import React, { createContext, useReducer, useContext } from "react";
import CartReducer from '../containers/CartContainer/reducer';

// we'll leave this empty for now
let initialState= {cartItems:[]};

//set initialCartItems in local Storage
if(!localStorage.getItem("cartItems"))
localStorage.setItem("cartItems", JSON.stringify([]))
else
initialState = {cartItems: [...JSON.parse(localStorage.getItem("cartItems"))]}


const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};
// useStore will be used in React components to fetch and mutate state
export const useStore = store => {
    const { state, dispatch } = useContext(StoreContext);
    return { state, dispatch };
};


