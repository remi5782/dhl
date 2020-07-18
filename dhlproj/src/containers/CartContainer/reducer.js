export default function cartReducer(state, action) {
    console.log('***state', state);
    console.log('***action', action);
    switch (action.type) {
      case "ADD_ITEM":
        return { ...state, cartItems: [...state.cartItems, {...action.payload}] }
      case "DELETE_ITEM":
        return { ...state, cartItems: [...state.cartItems.filter(item => item.id != action.payload.id)] }
      default:
        return state
    }
  }