import React from 'react';
import './App.css';
import Todos from "./components/Todos";
import {Todo} from "./models/todo";


function App() {
    const todos = [
        new Todo('Learn React'),
        new Todo('Learn TS'),
    ]
    return (
        <>
            <Todos items={todos}/>
        </>
    );
}

export default App;
