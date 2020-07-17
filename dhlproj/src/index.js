import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';
//import { PersistGate } from 'redux-persist/integration/react'

// const initialState = { cartItems: [{ id: 1, price: 113, date: "21-07-2020", description: 'initial Item in cart', type: 'earning' }] }
const  initialState = {cartItems: []};
function cartReducer(state = initialState, action) {
  console.log('***state', state);
  console.log('***action', action)
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cartItems: [...state.cartItems, {...action.payload, type: "earning"}] }
    case "DELETE_ITEM":
      return { ...state, cartItems: [...state.cartItems.filter(item => item.id != action.payload.id)] }
    default:
      return state
  }
}
const rootReducer = combineReducers({
  cart: cartReducer
})

console.log(rootReducer);
// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

function configureStore() {
  const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;
    return createStore(
        cartReducer,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
 }
 

const store = configureStore();
// const persister = persistStore(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={()=>(<h2>Loading</h2>)} persistor={persister} > */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
