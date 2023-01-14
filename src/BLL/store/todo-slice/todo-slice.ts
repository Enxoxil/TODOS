import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Todo} from "../../../models/Todo";
import axios from "axios";

const token = 'AIzaSyActbvWvQ9TQdBT51adIm-TCpxg0gZ5S7Q';

const API_URL = 'https://todo-list---rtk-default-rtdb.firebaseio.com/';
const api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
})

interface IInitialState {
    todos: Todo[],
}

const initialState: IInitialState = {
    todos: [],
}

interface IAddTodoInBaseResponse {
    text: string,
}

interface IAddTodoInBaseRequest {

}

export const addTodoInBase = createAsyncThunk<IAddTodoInBaseRequest, IAddTodoInBaseResponse>(
    'todosSlice/addTodoInBase',
    async (text) => {

        const response = await api.post('list.json',
            JSON.stringify(text));
        return response.data
    }
);


const todoSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.todos.push({
                ...new Todo(action.payload)
            })
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter(item => item.id !== action.payload);
        },
        isDone(state, action: PayloadAction<string>) {
            const doneTodoItem = state.todos.find(item => item.id === action.payload);
            if (doneTodoItem) {
                doneTodoItem!.checked = !doneTodoItem!.checked;
            }
        },
        editTodo(state, action: PayloadAction<{ text: string, id: string }>) {
            const editTodo = state.todos.find(item => item.id === action.payload.id);
            if (editTodo) {
                editTodo!.text = action.payload.text;
            }
        }
    },
    extraReducers: () => {

    }
})

export const {addTodo, removeTodo, isDone, editTodo} = todoSlice.actions
export default todoSlice.reducer;