import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';
import {Provider} from 'react-redux';
 
const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
})

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
)
const store = createStore(allReducers,{
    products: [{name: 'iPhone'}],
    user: 'Michael'
}, allStoreEnhancers);

console.log(store.getState());

ReactDOM.render(<Provider store={store}>
    <App randomProps="whatever"/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
