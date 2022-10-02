import React, {useState} from 'react';
import './App.css';
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import {Todo} from './models/Todo'

interface TItems {
    text: string,
    id: string,
}

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [value, setValue] = useState<TItems[]>([]);

    console.log(value);
    const addTodosHandler = (text: string) => {
        const item = new Todo(text);
        setValue([...value, {text: text, id: text}])
        // setTodos((current) => {
        //     return current.concat(item);
        // });
        setTodos([...todos, item])

    }
    const removeHandler = (id : string) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    return (
        <>
            <NewTodo onAddTodoHandler={addTodosHandler}/>
            <Todos items={todos} onRemoveHandler={removeHandler}/>
        </>
    );
}

export default App;
