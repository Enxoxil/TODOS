import React, {ReactNode, useState} from 'react';
import {Todo} from '../models/Todo'
import {PropsWithChildren} from "react";

type ContextTypeObj = {
    todos: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void,
    isDone: (id: string) => void,
}

export const TodosContext = React.createContext<ContextTypeObj>({
    todos: [],
    addTodo: (text) => {
    },
    removeTodo: (id) => {
    },
    isDone: (id) => {
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
    const isDoneHandler = (id: string) => {
        setTodos(todos.map((todo) => {
            if(todo.id === id){
                todo.isDone = !todo.isDone;
            }
            return todo;
        }))
    }
    const contextValue: ContextTypeObj = {
        todos,
        isDone: isDoneHandler,
        addTodo: addTodosHandler,
        removeTodo: removeTodoHandler
    }
    return <TodosContext.Provider value={contextValue}>{props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;