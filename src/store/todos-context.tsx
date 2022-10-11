import React, {useState} from 'react';
import {Todo} from '../models/Todo';
import {PropsWithChildren} from "react";

type ContextTypeObj = {
    todos: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void,
    isDone: (id: string) => void,
    inputEvent: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    inputValue: string,
}

export const TodosContext = React.createContext<ContextTypeObj>({
    todos: [],
    addTodo: () => {
    },
    removeTodo: () => {
    },
    isDone: () => {
    },
    inputEvent: () => {
    },
    inputValue: '',
});

const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [enteredValue, setEnteredValue] = useState('');

    const inputHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setEnteredValue(event.target.value);
    };


    const addTodosHandler = (text: string) => {
        const item = new Todo(text);
        setTodos([...todos, item])
        setEnteredValue('')
    };
    const removeTodoHandler = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };
    const isDoneHandler = (id: string) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.checked = !todo.checked;
            }
            return todo;
        }))
    }
    const contextValue: ContextTypeObj = {
        todos,
        isDone: isDoneHandler,
        addTodo: addTodosHandler,
        removeTodo: removeTodoHandler,
        inputEvent: inputHandler,
        inputValue: enteredValue,
    }
    return <TodosContext.Provider value={contextValue}>{props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;