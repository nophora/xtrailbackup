
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import promise from "redux-promise-middleware"
//import promise from 'redux-promise'
import anyplayReducer from './comreducer'

const mylonger = (store) => (next) => (action) => {
    console.log('looger', action)
    next(action)
}


const store=createStore(combineReducers({anyplayReducer}), {}, applyMiddleware(mylonger, thunk, promise));


export default store;