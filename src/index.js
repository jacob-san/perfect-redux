import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';
import {Provider} from 'react-redux';
 
const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
})
const store = createStore(allReducers,{
    products: [{name: 'iPhone'}],
    user: 'Michael'
}, window.devToolsExtension && window.devToolsExtension());

console.log(store.getState());

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
