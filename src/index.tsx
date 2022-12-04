import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import TodosContextProvider from "./BLL/todos-context";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from '../src/BLL/store/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <TodosContextProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </TodosContextProvider>
    </Provider>
);
