import {createSlice} from "@reduxjs/toolkit";
import {Todo} from "../../../models/Todo";

interface IInitialState {
    todos: Todo[],
}

const initialState: IInitialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                ...new Todo(action.payload.text)
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(item => item.id !== action.payload.id);
        },
        isDone(state, action) {
            const doneTodoItem = state.todos.find(item => item.id === action.payload.id);
            doneTodoItem!.checked = !doneTodoItem!.checked;
        },
        editTodo(state, action) {
            const editTodo = state.todos.find(item => item.id === action.payload.id);
            editTodo!.text = action.payload.text;
        }
    }
})

export const {addTodo, removeTodo, isDone, editTodo} = todoSlice.actions
export default todoSlice.reducer;