import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Anyplay from "./anyplay.jsx";

import { Provider } from 'react-redux';
import store from './store'

//https://5fa143260b518fb42b8dd76b--blissful-babbage-d79d86.netlify.app/

store.subscribe(() => {
    console.log('store', store.getState())
})



ReactDOM.render(<Provider store={store}> <Anyplay /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
