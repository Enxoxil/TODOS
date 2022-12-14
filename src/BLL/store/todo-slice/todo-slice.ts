import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Todo} from "../../../models/Todo";

interface IInitialState {
    todos: Todo[],
}

const initialState: IInitialState = {
    todos: [],
}

const token = 'AIzaSyActbvWvQ9TQdBT51adIm-TCpxg0gZ5S7Q';

export const authenticate = createAsyncThunk(
    'todosSlice/authenticate',
    async (_, {
        rejectWithValue
    }) => {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${token}`, {
            method : 'POST',
            body: JSON.stringify({
                email: '_',
                password: '_',
                returnRescueToken: true,
            })

        });
        if (!response.ok) {
            return rejectWithValue('Server error');
        }
        return await response.json();
    }
)

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
    extraReducers: {
        //
        // [fetchTodos.pending]: (state, action) => {
        // },
        // [fetchTodos.fulfilled]: (state, action) => {
        // },
        // [fetchTodos.rejected]: (state, action) => {
        //     // state.error = action.payload
        // },
    }
})

export const {addTodo, removeTodo, isDone, editTodo} = todoSlice.actions
export default todoSlice.reducer;