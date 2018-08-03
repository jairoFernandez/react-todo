import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import configureStore from "./store/configureStore";
//import todoApp from './redux/reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

import '../node_modules/font-awesome/css/font-awesome.min.css';

document.title = "TODO APP";

const store = configureStore();

ReactDOM.render(

    <Provider store={store}>
        <HashRouter basename='/'>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
