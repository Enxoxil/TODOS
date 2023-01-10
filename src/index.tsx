import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from '../src/BLL/store/store';
import './BLL/BLL_helpers/firebase';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
