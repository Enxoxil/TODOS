import {createSlice} from "@reduxjs/toolkit";
import {Todo} from "../../models/Todo";

interface IInitialState {
    todos: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void,
    isDone: (id: string) => void,
}

const initialState: IInitialState = {
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    isDone: () => {},
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action){

        },
        removeTodo(state, action){

        },
        isDone(state, action){

        }
    }
})

export const { addTodo, removeTodo, isDone } = todoSlice.actions
