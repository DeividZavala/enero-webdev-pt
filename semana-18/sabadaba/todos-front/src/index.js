import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import {BrowserRouter} from 'react-router-dom';

import 'moment/locale/es';

import 'uikit/dist/css/uikit.min.css';

// loads the Icon plugin
UIkit.use(Icons);

const WithRouter = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(<WithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
