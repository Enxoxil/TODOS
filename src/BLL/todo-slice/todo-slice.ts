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

const todoSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        addTodo(state, action){
            state.todos.push({
                ...new Todo(action.payload.text)
            })
        },
        removeTodo(state, action){

        },
        isDone(state, action){

        }
    }
})

export const { addTodo, removeTodo, isDone } = todoSlice.actions
export default todoSlice.reducer;