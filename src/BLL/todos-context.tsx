import React, {useState} from 'react';
import {Todo} from '../models/Todo';
import {PropsWithChildren} from "react";

interface IContextTypeObj {
    todos: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void,
    isDone: (id: string) => void,
    inputEvent: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    inputValue: string,
    editTodo: (id: string, text: string) => void,
}

export const TodosContext = React.createContext<IContextTypeObj>({
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
    editTodo: () => {
    },
})

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

    const editTodoTextHandler = (id: string, newTodoText: string) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.text = newTodoText;
            }
            return todo;
        }))
    }


    const isDoneHandler = (id: string) => {
        const newTodos = todos.map((item) => {
            if(item.id === id){
                item.checked = !item.checked
            }
            return item;
        })

        const isDoneTodos = newTodos.filter((todo) => todo.checked).reverse();
        const isNotDoneTodos = newTodos.filter(((todo) => !todo.checked));

        setTodos([...isNotDoneTodos, ...isDoneTodos])
    }


    const contextValue: IContextTypeObj = {
        todos,
        isDone: isDoneHandler,
        addTodo: addTodosHandler,
        removeTodo: removeTodoHandler,
        inputEvent: inputHandler,
        inputValue: enteredValue,
        editTodo: editTodoTextHandler,
    }

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;