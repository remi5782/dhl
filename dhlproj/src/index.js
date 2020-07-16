import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'


function cartReducer(state={}, action){
  switch(action.type){
    case "ADD_EARNING":
      return {...state, earnings: [...state.earnings, action.payload]}
    case "DELETE_EARNING":
      return {...state, earnings: [...state.earnings.filter(earn=> earn.id!=action.payload.id)]}
    case "ADD_EXPENSE":
      return {...state, expenses: [...state.expenses, action.payload]}
    case "DELETE_EXPENSE":
      return {...state, earnings: [...state.earnings.filter(exp=> exp.id!=action.payload.id)]}
    default:
      return {...state}
  }
}
const rootReducer = ()=>({
  cart: cartReducer
})

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

function configureStore(initialState={}){
  // for checking on Redux plugin installed on the chrome
  const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;
      return createStore(
        persistedReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
}

const store = configureStore();
const persister = persistStore(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={()=>(<h2>Loading</h2>)} persistor={persister} >
      <BrowserRouter>
    <App />
    </BrowserRouter>
      </PersistGate>
    
    </Provider>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
