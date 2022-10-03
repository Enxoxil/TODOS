import React, {ReactNode, useState} from 'react';
import {Todo} from '../models/Todo'
import {PropsWithChildren} from "react";

type ContextTypeObj = {
    todos: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void,
}

export const TodosContext = React.createContext<ContextTypeObj>({
    todos: [],
    addTodo: (text) => {
    },
    removeTodo: (id) => {
    },
});

const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodosHandler = (text: string) => {
        const item = new Todo(text);
        setTodos([...todos, item])

    }
    const removeTodoHandler = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const contextValue: ContextTypeObj = {
        todos: todos,
        addTodo: addTodosHandler,
        removeTodo: removeTodoHandler
    }
    return <TodosContext.Provider value={contextValue}>{props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;