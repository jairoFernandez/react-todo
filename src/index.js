import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

import '../node_modules/font-awesome/css/font-awesome.min.css';

document.title = "TODO APP";

ReactDOM.render(
    <HashRouter basename='/'>
        <App />
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
